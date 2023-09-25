/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import WelcomeContent from '../../components/WelcomeContent/WelcomeContent';

export default function HomePage() {
  return (
    <div className="homeContainer">
      <WelcomeContent />
    </div>
  );
}
