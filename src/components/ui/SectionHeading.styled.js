import styled from "styled-components";

export const SectionHeading = styled.div`
    text-align: center;
    margin-bottom: 7rem;

    h1 {
        text-transform: uppercase;
        display: inline-block;
        font-size: 2rem;
        margin: 0.5rem 0 1.5rem 0;
        position: relative;

        &:after {
            content: '';
            display: block;
            height: 5px;
            width: 50%;
            background: ${props => props.theme.colors.colbatBlue};
            position:absolute;
            bottom: -7px;
            /** Left and transform, center it directly. */
            left: 50%;
            transform: translateX(-50%);

        }

    }

    p{
        font-family: "Poppins", sans-sarif;
        font-size: 16px;
        margin-bottom: 5rem;
    }

    @media (max-width: ${(props) => props.theme.mobile}) {
        text-algin: left;
    }

`;