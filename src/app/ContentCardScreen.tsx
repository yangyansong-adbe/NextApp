"use client";

import React from 'react';
import { ComponentConfig, ComponentStyle } from './ComponentConfig';

/**
 * Transforms style objects to handle unsupported properties
 * - If fillWidth: true is present, it's removed and replaced with width: '100%'
 * - Converts React Native specific styles to web CSS styles
 */
const transformStyle = (style: ComponentStyle): React.CSSProperties => {
  // Create a new style object to avoid mutating the original
  const newStyle: any = { ...style };

  // Set display:flex if any flexbox properties are present but display isn't set
  if (
    (newStyle.flexDirection || 
     newStyle.flex !== undefined || 
     newStyle.alignItems || 
     newStyle.justifyContent) && 
    !newStyle.display
  ) {
    newStyle.display = 'flex';
  }

  // Handle fillWidth property
  if (newStyle.fillWidth === true) {
    console.log('found fillWidth=true in style');
    newStyle.width = '100%';
    delete newStyle.fillWidth;
  }

  // When flexDirection is specified, ensure proper CSS flexbox setup
  if (newStyle.flexDirection) {
    newStyle.display = 'flex';
    
    // Convert non-standard values to standard CSS values
    if (newStyle.flexDirection === 'box') {
      delete newStyle.flexDirection;
      newStyle.display = 'block';
    }
  }

  // If flex property exists without flexDirection, set default row direction
  if (newStyle.flex !== undefined && !newStyle.flexDirection) {
    newStyle.display = 'flex';
    newStyle.flexDirection = 'row';
  }

  // Handle alignItems conversion
  if (newStyle.alignItems === 'top') {
    newStyle.alignItems = 'flex-start';
  } else if (newStyle.alignItems === 'bottom') {
    newStyle.alignItems = 'flex-end';
  }

  // Handle justifyContent conversion
  if (newStyle.justifyContent === 'top') {
    newStyle.justifyContent = 'flex-start';
  } else if (newStyle.justifyContent === 'bottom') {
    newStyle.justifyContent = 'flex-end';
  }

  // Convert contentScale to objectFit
  if (newStyle.contentScale === 'crop') {
    newStyle.objectFit = 'cover';
    delete newStyle.contentScale;
  } else if (newStyle.contentScale === 'fill') {
    newStyle.objectFit = 'fill';
    delete newStyle.contentScale;
  } else if (newStyle.contentScale === 'contain') {
    newStyle.objectFit = 'contain';
    delete newStyle.contentScale;
  }

  // Handle marginVertical/paddingVertical
  if (newStyle.marginVertical !== undefined) {
    newStyle.marginTop = newStyle.marginVertical;
    newStyle.marginBottom = newStyle.marginVertical;
    delete newStyle.marginVertical;
  }

  if (newStyle.paddingVertical !== undefined) {
    newStyle.paddingTop = newStyle.paddingVertical;
    newStyle.paddingBottom = newStyle.paddingVertical;
    delete newStyle.paddingVertical;
  }

  // Handle marginHorizontal/paddingHorizontal
  if (newStyle.marginHorizontal !== undefined) {
    newStyle.marginLeft = newStyle.marginHorizontal;
    newStyle.marginRight = newStyle.marginHorizontal;
    delete newStyle.marginHorizontal;
  }

  if (newStyle.paddingHorizontal !== undefined) {
    newStyle.paddingLeft = newStyle.paddingHorizontal;
    newStyle.paddingRight = newStyle.paddingHorizontal;
    delete newStyle.paddingHorizontal;
  }

  // Convert textShadowOffset if it exists (format: "x,y" to individual properties)
  if (typeof newStyle.textShadowOffset === 'string') {
    const [offsetX, offsetY] = newStyle.textShadowOffset.split(',').map((val: string) => parseInt(val.trim()));
    newStyle.textShadowOffsetX = offsetX;
    newStyle.textShadowOffsetY = offsetY;
    delete newStyle.textShadowOffset;
  }

  // Handle border width, color, etc.
  if (newStyle.borderWidth) {
    newStyle.borderStyle = newStyle.borderStyle || 'solid';
  }

  return newStyle as React.CSSProperties;
};

const renderComponent = (config: ComponentConfig): React.ReactElement | null => {
  // Use either style or tyle (handling typo in JSON)
  const style = transformStyle(config.style || config.tyle || {});

  switch (config.type) {
    case 'view':
      return (
        <div 
          id={config.id}
          className={config.name}
          style={style}
        >
          {config.children?.map((childConfig, index) => (
            <React.Fragment key={index}>
              {renderComponent(childConfig)}
            </React.Fragment>
          ))}
        </div>
      );

    case 'text':
      return (
        <span style={style}>
          {config.content}
        </span>
      );

    case 'image':
      return (
        <img
          style={style}
          src={config.content || config.url}
          alt={config.name || "Image"}
        />
      );

    default:
      return null;
  }
};

interface ContentCardScreenProps {
  config: ComponentConfig;
}

const ContentCardScreen: React.FC<ContentCardScreenProps> = ({ config }) => {
  return renderComponent(config);
};

export default ContentCardScreen;
