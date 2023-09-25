import { capitalizeFirstLetter } from '../helpers/helpers';

export const PRESENTATION = 'presentation';
export const EXPERIENCE = 'experience';
export const INTERESTS = 'interests';
export const EXAMPLES = 'examples';
export const SECTION = 'section';

export const PRESENTATION_SECTION = `${PRESENTATION}${capitalizeFirstLetter(SECTION)}`;
export const EXPERIENCE_SECTION = `${EXPERIENCE}${capitalizeFirstLetter(SECTION)}`;
export const INTERESTS_SECTION = `${INTERESTS}${capitalizeFirstLetter(SECTION)}`;
export const EXAMPLES_SECTION = `${EXAMPLES}${capitalizeFirstLetter(SECTION)}`;

export const INNER_CONTAINER = 'innerContainer';
export const LANGUAGES = 'languages';
export const PARAGRAPH = 'paragraph';
export const CONTAINER = 'container';
export const CONTENT = 'content';
export const TITLE = 'title';
export const TEXT = 'text';

export const RIGHT = 'right';
export const LEFT = 'left';
export const FULL = 'full';

export const LIGHT = 'light';
export const DARK = 'dark';

export const VISIBLE = 'visible';
export const ACTIVE = 'active';
export const HIDDEN = 'hidden';

export const PI_TEXT = 'pi';

export type section = {
    title?: string;
    id: string;
    icon: any;
    class: string;
};
export const sectionsIndex: Array<section> = [
    {
        title: PRESENTATION,
        id: PRESENTATION_SECTION,
        icon: '',
        class: PRESENTATION
    },
    {
        title: EXPERIENCE,
        id: EXPERIENCE_SECTION,
        icon: '',
        class: EXPERIENCE
    },
    {
        title: INTERESTS,
        id: INTERESTS_SECTION,
        icon: '',
        class: INTERESTS
    },
    {
        title: EXAMPLES,
        id: EXAMPLES_SECTION,
        icon: '',
        class: EXAMPLES
    }
];

export type scrollObservable = {
    heightTrigger: number;
    id: string;
};

export const scrollTargets: Array<scrollObservable> = [
    { id: 'stickyCard', heightTrigger: 100 },
    { id: 'presentationContainer', heightTrigger: 100 }
];

export const PI =
    '3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923';
