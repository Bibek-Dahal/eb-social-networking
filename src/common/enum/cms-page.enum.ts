import { registerEnumType } from '@nestjs/graphql';

export enum CmsPageTitle {
  ABOUT = 'About Us',
  CONTACT = 'Contact Us',
  TERMS_AND_CONDITION = 'Terms And Conditions',
  PRIVACY_POLICY = 'Privacy Policy',
  // other titles
}

export enum CmsPageStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

registerEnumType(CmsPageTitle, { name: 'CmsPageTitle' });

registerEnumType(CmsPageStatus, { name: 'CmsPageStatus' });
