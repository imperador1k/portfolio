import type React from 'react';
import EnhancedContact from 'components/apps/Contact/EnhancedContact';
import { type ComponentProcessProps } from 'components/system/Apps/RenderComponent';

const Contact: React.FC<ComponentProcessProps> = (props) => <EnhancedContact {...props} />;

export default Contact;