import {
    EXAMPLES_SECTION,
    EXPERIENCE_SECTION,
    INTERESTS_SECTION,
    PRESENTATION_SECTION
} from '../../constants/constants';
import { ExamplesSection } from './examplesSection';
import { ExperienceSection } from './experienceSection';
import { InterestsSection } from './interestsSection';
import { PresentationSection } from './presentationSection';

type sectionContentProps = {
    sectionId: string;
};

export const SectionContent = ({ sectionId }: sectionContentProps) => {
    switch (sectionId) {
        case PRESENTATION_SECTION: {
            return <PresentationSection />;
        }
        case EXPERIENCE_SECTION: {
            return <ExperienceSection />;
        }
        case INTERESTS_SECTION: {
            return <InterestsSection />;
        }
        case EXAMPLES_SECTION: {
            return <ExamplesSection />;
        }
        default:
            return <></>;
    }
};
