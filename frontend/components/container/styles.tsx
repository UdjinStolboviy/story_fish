import styled from '@emotion/styled';

export const StyledContainer = styled.div`
    position: relative;

    border-radius: 0 0 100px 100px;
    padding-bottom: 150px;
    z-index: 2;
    background-color: #fff;

    @media screen and (min-width: 320px) and (max-width: 739px) {
        display: flex;
        flex-direction: column;
        padding-bottom: 80px;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (min-width: 320px) and (max-width: 374px) {
        justify-content: center;
        align-items: center;
        min-width: 375px;
    }
`;
