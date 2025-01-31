export interface RoutingContextProps {
  goNextPage: () => void;
  goBackPage: () => void;
  currentStep: AppUrl;
  canShowAffirmation: boolean;
  topLevelPageTheme: string;
}

/**
 * the reason we have set up this url tracking at all is because of the Involvement page,
 *   where each selection affects what the next page will be and thus what pages are previous
 */
export enum AppUrl {
  Landing = '',
  NotFound = '404',
  BeforeYouBegin = '/form/start',
  Introduction = '/form/intro',
  IntroductionPreview = '/form/introduction/preview',
  Involvement = '/form/involvement',
  InvolvementPreview = '/form/involvement',
  Job = '/form/job',
  JobPreview = '/form/job/preview',
  CommunityService = '/form/community-service',
  CommunityServicePreview = '/form/community-service/preview',
  Recovery = '/form/recovery',
  RecoveryPreview = '/form/recovery/preview',
  School = '/form/school',
  SchoolPreview = '/form/school/preview',
  Parenting = '/form/parenting',
  ParentingPreview = '/form/parenting/preview',
  Unemployed = '/form/unemployed',
  UnemployedPreview = '/form/unemployed/preview',
  Goals = '/form/goals',
  GoalsPreview = '/form/goals/preview',
  Why = '/form/why',
  WhyPreview = '/form/why/preview',
  Finalize = '/form/finalize',
  FinalizePreview = '/form/finalize/preview',
  Editing = '/form/editing',
  Download = '/form/download',
  PrivacyPolicy = 'privacy-policy',
  TermsOfUse = 'terms-of-use',
  FAQ = 'faq',
  AboutUs = 'about-us',
}

export type AppUrlOrString = AppUrl | string;

const AppUrlList = Object.values(AppUrl);
export function isAppUrl(url: AppUrlOrString): boolean {
  return AppUrlList.includes(url as AppUrl);
}

/**
 * @param {AppUrl} url
 * @returns {AppUrl}
 */
export function getNextFormUrl(url: AppUrl): AppUrl {
  switch (url) {
    case AppUrl.Landing:
      return AppUrl.BeforeYouBegin;

    case AppUrl.BeforeYouBegin:
      return AppUrl.Introduction;

    case AppUrl.Introduction:
      return AppUrl.IntroductionPreview;
    case AppUrl.IntroductionPreview:
      return AppUrl.Involvement;

    case AppUrl.Involvement:
      return AppUrl.Job;

    case AppUrl.Job:
      return AppUrl.JobPreview;
    case AppUrl.JobPreview:
      return AppUrl.Unemployed;

    case AppUrl.Unemployed:
      return AppUrl.UnemployedPreview;
    case AppUrl.UnemployedPreview:
      return AppUrl.Recovery;

    case AppUrl.Recovery:
      return AppUrl.RecoveryPreview;
    case AppUrl.RecoveryPreview:
      return AppUrl.School;

    case AppUrl.School:
      return AppUrl.SchoolPreview;
    case AppUrl.SchoolPreview:
      return AppUrl.Parenting;

    case AppUrl.Parenting:
      return AppUrl.ParentingPreview;
    case AppUrl.ParentingPreview:
      return AppUrl.CommunityService;

    case AppUrl.CommunityService:
      return AppUrl.CommunityServicePreview;
    case AppUrl.CommunityServicePreview:
      return AppUrl.Goals;

    case AppUrl.Goals:
      return AppUrl.GoalsPreview;
    case AppUrl.GoalsPreview:
      return AppUrl.Why;

    case AppUrl.Why:
      return AppUrl.WhyPreview;
    case AppUrl.WhyPreview:
      return AppUrl.Finalize;

    case AppUrl.Finalize:
      return AppUrl.FinalizePreview;
    case AppUrl.FinalizePreview:
      return AppUrl.Download;

    case AppUrl.Download:
      return AppUrl.Landing;

    default:
      return AppUrl.Landing;
  }
}

/**
 * @param {AppUrl} appUrl
 * @returns {Boolean}
 */
export function isFormPage(appUrl: AppUrl): Boolean {
  return (
    appUrl === AppUrl.Introduction ||
    appUrl === AppUrl.IntroductionPreview ||
    appUrl === AppUrl.Involvement ||
    appUrl === AppUrl.Job ||
    appUrl === AppUrl.JobPreview ||
    appUrl === AppUrl.CommunityService ||
    appUrl === AppUrl.CommunityServicePreview ||
    appUrl === AppUrl.Recovery ||
    appUrl === AppUrl.RecoveryPreview ||
    appUrl === AppUrl.School ||
    appUrl === AppUrl.SchoolPreview ||
    appUrl === AppUrl.Parenting ||
    appUrl === AppUrl.ParentingPreview ||
    appUrl === AppUrl.Unemployed ||
    appUrl === AppUrl.UnemployedPreview ||
    appUrl === AppUrl.Goals ||
    appUrl === AppUrl.GoalsPreview ||
    appUrl === AppUrl.Why ||
    appUrl === AppUrl.WhyPreview ||
    appUrl === AppUrl.Finalize ||
    appUrl === AppUrl.FinalizePreview
  );
}
