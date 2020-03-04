import styled from 'styled-components';

import { CSSTransition } from 'react-transition-group';

import { White } from '../../styles/Colors';
import { BoxShadow2 } from '../../styles/Shadows';
import { Fixed } from '../../styles/Positions';

export const Aside = styled.aside`
	${Fixed};
	z-index: 100;
	height: 100vh;
	width: 70%;
	background: ${White};
	box-shadow: ${BoxShadow2};
`;

export const CSSAnimation = styled(CSSTransition)`
	.slide-in-left-enter {
		transform: translateX(-100%);
	}

	.slide-in-left-enter-active {
		transform: translateX(0);
		opacity: 1;
		transition: all 200ms;
	}

	.slide-in-left-exit {
		transform: translateX(0%);
		opacity: 1;
	}

	.slide-in-left-exit-active {
		transform: translateX(-100%);
		opacity: 0;
		transition: all 200ms;
	}
`;
