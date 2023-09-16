import React from 'react';

import '../ServicePages/servicePages.css';
import SolutionPageTemplate from './SolutionPageTemplate/SolutionPageTemplate';

const SalesOffers = () => {
  // Page title (Updated)
  const pageTitle = 'Sales & Offers';

  // Page content (Updated)
  const pageContent =
    "Our Sales & Offers service provides you with exclusive deals and promotions to help you save on your favorite products and services. Whether you're looking for discounts on electronics, fashion, travel, or dining, we've got you covered. Explore our offers and enjoy incredible savings on your purchases.";

  // List of items (Updated)
  const listItems = [
    'Exclusive discounts and promotions',
    'Wide range of product and service categories',
    'Regular updates on new deals and offers',
    'Convenient online shopping experience',
    'Customer support for inquiries and assistance',
    'Membership options for additional benefits',
  ];

  return (
    <SolutionPageTemplate
      pageTitle={pageTitle}
      pageContent={pageContent}
      listItems={listItems}
    />
  );
};

export default SalesOffers;
