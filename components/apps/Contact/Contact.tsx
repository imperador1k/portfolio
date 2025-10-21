import React from 'react';
import EnhancedContact from './EnhancedContact';
import { ComponentProcessProps } from 'components/system/Apps/RenderComponent';

const Contact: React.FC<ComponentProcessProps> = (props) => {
  return <EnhancedContact {...props} />;
};

export default Contact;