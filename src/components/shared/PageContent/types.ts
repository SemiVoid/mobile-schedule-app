import { PageHeaderProps } from '../PageHeader/types';

export interface PageContentProps extends PageHeaderProps {
  withHeader?: boolean;
  fullscreen?: boolean;
  footer?: React.ReactNode;
}
