import styled from 'styled-components/macro';

export const RegisterWrapper = styled.div`
    width: 464px;
    height: 570px;
    display: flex;
    flex-direction: column;
    padding-top: 72px;
    align-items: center;
    background-color: #ffec9d;
    border-radius: 10px;
`;

export const RegisterFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > input[type=text] {
        margin-bottom: 35px;
    }

    & > input[type=submit] {
        margin-top: 20px;
    }

`;