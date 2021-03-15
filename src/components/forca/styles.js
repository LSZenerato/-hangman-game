import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(39, 41, 43);
`;

const Form = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(39, 41, 43);
    border-radius: 20px;
    flex-direction: column;

    .form-div {
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
    }

    h2 {
        font-size: 0.8rem;
        color: white;
        margin: 10px 0;
    }

    input {
        padding: 0 10px;
        height: 40px;
        width: 100%;
        text-align: center;
        border-radius: 10px;
        font-size: 1.2rem;

        :focus {
            outline: none;
        }
    }

    button {
        margin: 10px 0;
        width: 100%;
        height: 40px;
        color: white;
        font-weight: 800;
        border: none;
        border-radius: 10px;

        :focus {
            outline: none;
        }
    }

    .btn-start {
        background: #3535ec;
    }
    .btn-end {
        background: green;
    }
`;

const ForcaItems = styled.div`
    height: 100%;
    max-width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    overflow-x: auto;
    padding: 0 10px;
    margin: 20px 0;

    .item {
        height: 20px;
        min-width: 30px;
        display: flex;
        justify-content: center;
        margin: 20px 5px;
        padding: 5px 5px;
        width: 75px;
        border-radius: 5px;
        background: #FAFAFA;
    }
    #ok {
        border-bottom: 4px solid green;
    }

    #nok {
        border-bottom: 4px solid red;
    }

    .hidden {
        display: none;
    }
`;

export {
    Container,
    Form,
    ForcaItems
}