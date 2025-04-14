"use client";

import React, {useState} from 'react';
import {Button} from "@/components/ui/button"
import ContentCardScreen from './ContentCardScreen';
import { 
  demo1, 
  demo2, 
  demo22,
  demo3, 
  ui_test, 
  valuedCustomerCardData, 
  splitPromotionCardData, 
  iconsGrid, 
  notificationPrompt, 
  subjectCards, 
  adobeImageTemplate, 
  frontEndGeneratedJson1, 
  specialOfferCard 
} from './ComponentConfig';

const Home: React.FC = () => {
  const [rectangles, setRectangles] = useState<string[]>([]);
  const [showDemo1, setShowDemo1] = useState(false);
  const [showDemo2, setShowDemo2] = useState(false);
  const [showDemo3, setShowDemo3] = useState(false);
  const [showAIContent, setShowAIContent] = useState(false);

  // Helper function to hide all cards
  const hideAllCards = () => {
    setShowDemo1(false);
    setShowDemo2(false);
    setShowDemo3(false);
    setShowAIContent(false);
  };

  const addRectangle = () => {
    // Hide all cards first
    hideAllCards();
    // Then show only demo1
    setShowDemo1(true);
    
    // Keep the random color rectangle functionality
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setRectangles([randomColor]); 
  };

  const showDemo2Card = () => {
    hideAllCards();
    setShowDemo2(true);
  };

  const showDemo3Card = () => {
    hideAllCards();
    setShowDemo3(true);
  };

  const showAICard = () => {
    hideAllCards();
    setShowAIContent(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Next Starter</h1>
      <p className="text-gray-800 mb-8">
        This is a basic Next.js starter application.
      </p>

      <div className="flex space-x-4 mb-8">
        <Button onClick={addRectangle}>Show Demo1 Card</Button>
        <Button onClick={showDemo2Card}>Show Demo2 Card</Button>
        <Button onClick={showDemo3Card}>Show Demo3 Card</Button>
        <Button onClick={showAICard}>Show AI Card</Button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        {showDemo1 && (
          <div className="border p-4 rounded-lg" style={{ width: '400px' }}>
            <h2 className="text-xl font-semibold mb-4">Demo 1 Content Card</h2>
            <ContentCardScreen config={demo1} />
          </div>
        )}

        {showDemo2 && (
          <div className="border p-4 rounded-lg" style={{ width: '400px' }}>
            <h2 className="text-xl font-semibold mb-4">Demo 2 Content Card</h2>
            <ContentCardScreen config={demo2} />
          </div>
        )}

        {showDemo3 && (
          <div className="border p-4 rounded-lg" style={{ width: '400px' }}>
            <h2 className="text-xl font-semibold mb-4">Demo 3 Content Card</h2>
            <ContentCardScreen config={demo3} />
          </div>
        )}

        {showAIContent && (
          <div className="border p-4 rounded-lg" style={{ width: '400px' }}>
            <h2 className="text-xl font-semibold mb-4">AI generated card</h2>
            <ContentCardScreen config={frontEndGeneratedJson1} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
