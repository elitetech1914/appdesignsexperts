'use client';
import React, { useState, useEffect, useRef, ForwardedRef } from 'react';
import HTMLFlipBook from 'react-pageflip';

// Define types for our dynamic PDF.js import
type PDFJSStatic = typeof import('pdfjs-dist');

// Type definitions for our components
interface PageProps {
  children: React.ReactNode;
  pageNumber: number;
}

interface FlipBookRef {
  pageFlip: () => {
    flipPrev: () => void;
    flipNext: () => void;
    turnToPage: (page: number) => void;
    getCurrentPageIndex: () => number;
  };
}

// Page Component
const Page = ({ children, pageNumber }: PageProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div 
      className="bg-white border border-gray-200 shadow-lg flex items-center justify-center relative" 
      ref={ref}
    >
      <div className="page-content w-full h-full flex items-center justify-center bg-white">
        {children}
      </div>
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
        {pageNumber}
      </div>
    </div>
  );
};

const ForwardedPage = React.forwardRef<HTMLDivElement, PageProps>(Page);
ForwardedPage.displayName = 'Page';

// Main Flipbook Component
const PDFFlipbook: React.FC = () => {
  const [pageImages, setPageImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pdfjsLib, setPdfjsLib] = useState<PDFJSStatic | null>(null);
  const flipBookRef = useRef<FlipBookRef>(null);

  // Fix 1: Dynamically import pdfjs-dist on the client side only :cite[1]:cite[3]
  useEffect(() => {
    const loadPdfJS = async () => {
      try {
        // Method 1: Recommended webpack build (most reliable)
        const pdfjs = await import('pdfjs-dist/webpack.mjs');
        
        // Method 2 (Alternative): If above doesn't work, try the legacy build
        // const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
        
        // Configure worker - using webpack build automatically handles worker setup :cite[3]
        // For legacy build, you would need:
        // const pdfjsWorker = await import('pdfjs-dist/legacy/build/pdf.worker.mjs');
        // pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
        
        setPdfjsLib(pdfjs);
      } catch (error) {
        console.error('Error loading PDF.js:', error);
      }
    };

    if (typeof window !== 'undefined') {
      loadPdfJS();
    }
  }, []);

  // Load saved PDF when pdfjsLib is ready
  useEffect(() => {
    const savedPdf = localStorage.getItem('savedPdf');
    if (savedPdf && pdfjsLib) {
      processPdfToImages(savedPdf);
    }
  }, [pdfjsLib]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf' && pdfjsLib) {
      const reader = new FileReader();
      
      reader.onload = async (e: ProgressEvent<FileReader>) => {
        const base64String = e.target?.result as string;
        localStorage.setItem('savedPdf', base64String);
        await processPdfToImages(base64String);
      };
      
      reader.readAsDataURL(file);
    } else if (!pdfjsLib) {
      alert('PDF engine is still loading. Please try again in a moment.');
    }
  };

  const processPdfToImages = async (base64String: string): Promise<void> => {
    if (!pdfjsLib) {
      console.error('PDF.js library is not loaded yet.');
      return;
    }

    setIsLoading(true);
    try {
      const base64Data = base64String.replace(/^data:application\/pdf;base64,/, '');
      
      // Load PDF document
      const loadingTask = pdfjsLib.getDocument({ data: atob(base64Data) });
      const pdf = await loadingTask.promise;
      
      const numPages = pdf.numPages;
      const images: string[] = [];

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.5 });
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) {
          throw new Error('Could not get canvas context');
        }

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Fix 2: Proper render parameters for newer pdfjs versions
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
          // @ts-ignore - canvas property is required but types may not reflect this
          canvas: canvas
        };

        await page.render(renderContext).promise;
        images.push(canvas.toDataURL('image/png', 0.8));
      }

      setPageImages(images);
    } catch (error) {
      console.error('Error processing PDF:', error);
      alert('Error processing PDF. Please try another file.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearStorage = (): void => {
    localStorage.removeItem('savedPdf');
    setPageImages([]);
  };

  const flipPrev = (): void => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };

  const flipNext = (): void => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header and Controls */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">PDF Flipbook Viewer</h1>
        <p className="text-gray-600">Upload a PDF to view it as an interactive flipbook</p>
      </div>

      {/* Upload Controls */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row items-center gap-4">
        <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
          Choose PDF File
          <input 
            type="file" 
            accept="application/pdf" 
            onChange={handleFileUpload}
            className="hidden"
            disabled={!pdfjsLib || isLoading}
          />
        </label>
        
        <button 
          onClick={clearStorage}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
          disabled={isLoading}
        >
          Clear Saved PDF
        </button>
        
        <span className="text-sm text-gray-500">
          {!pdfjsLib ? 'Loading PDF engine...' : 'PDF is automatically saved to your browser'}
        </span>
      </div>

      {/* Loading State */}
      {(isLoading || !pdfjsLib) && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="mt-2 text-gray-600">
            {!pdfjsLib ? 'Loading PDF engine...' : 'Processing PDF... This may take a moment.'}
          </p>
        </div>
      )}

      {/* Flipbook Display */}
      {pdfjsLib && pageImages.length > 0 && !isLoading && (
        <div className="flex flex-col items-center">
          {/* @ts-ignore - Library types are incorrect */}
          <HTMLFlipBook
            width={550}
            height={700}
            className="mx-auto shadow-xl"
            showCover={true}
            mobileScrollSupport={true}
            ref={flipBookRef}
            startPage={0}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            drawShadow={true}
            flippingTime={1000}
            usePortrait={true}
            startZIndex={0}
            autoSize={true}
            maxShadowOpacity={0.5}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            style={{}}
          >
            {pageImages.map((imgUrl, index) => (
              <ForwardedPage key={index} pageNumber={index + 1}>
                <img 
                  src={imgUrl} 
                  alt={`Page ${index + 1}`} 
                  className="w-full h-full object-contain"
                />
              </ForwardedPage>
            ))}
          </HTMLFlipBook>
          
          {/* Navigation Controls */}
          <div className="flex gap-4 mt-6">
            <button 
              onClick={flipPrev}
              className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded transition-colors"
            >
              Previous Page
            </button>
            <button 
              onClick={flipNext}
              className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded transition-colors"
            >
              Next Page
            </button>
          </div>

          {/* Page Counter */}
          <div className="mt-4 text-gray-600">
            Total pages: {pageImages.length}
          </div>
        </div>
      )}
      
      {/* Empty State */}
      {pdfjsLib && pageImages.length === 0 && !isLoading && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">No PDF Uploaded</h3>
          <p className="text-gray-500">Choose a PDF file to begin viewing it as a flipbook</p>
        </div>
      )}
    </div>
  );
};

export default PDFFlipbook;
