import { sectionsIndex } from '../../constants/constants';
import { SectionContent } from './sectionContent';

const Sections = () => {
    const getSections = () =>
        sectionsIndex.map(section => {
            return (
                <div key={section?.id}>
                    <div className={`${section.class} sectionContainer`} id={section.id}>
                        <SectionContent sectionId={section.id} />
                    </div>
                    <div className="sectionSpacer" />
                </div>
            );
        });
    return <div>{getSections()}</div>;
};

export default Sections;
