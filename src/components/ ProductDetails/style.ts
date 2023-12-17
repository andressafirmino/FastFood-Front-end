import styled from "styled-components";

export const DetailContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
`
export const DetailBox = styled.div`
    width: 700px;
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    h1 {
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 20px;
    }
`

export const DetailItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 120px;
    margin-bottom: 40px;

    .image-box {
        width: 150px;
        height: 120px;
        position: relative;
        background-color: rgb(18, 92, 19, 0.5);
        box-shadow: 0px 4px 6px 0px #0000000D;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100px;
            z-index: 20;
        }

        .image-box-bottom  {
            width: 100%;
            height: 65px;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: #FFFFFF;
            border-radius: 15px;
        }

        
    }

    .description-box {
        width: 300px;
        height: 100%;
        display: flex;
        flex-direction: column;

        .name {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 10px;
        }

        .description-text {
            font-size: 15px;
            font-weight: 200;
        }
    }

    .price {
        width: 100px;
        padding-top: 10px;

        p {
            font-size: 17px;
            font-weight: 500;
        }
    }
`
export const CounterButton = styled.div`
    width: 84px;
    height: 29px;
    border: 1.5px solid #125c13;
    border-radius: 39px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;
    div {
        width: 30px;
        height: 20px;
        font-size: 11px;
        font-weight: 200;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button {
        width: 32px;
        height: 29px;
        background-color: #FFFFFF;
        border-radius: 50%;
        background-color: #125c13;
        border: none;
        color: #FFFFFF;
        font-size: 15px;
        font-weight: 200;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const AdditionalContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    h2 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    p {
        font-size: 15px;
        font-weight: 200;
        margin-bottom: 20px;
    }

    .additional-box {
        display: flex;

        .additional-image {
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            box-shadow: 0px 4px 6px 0px #0000000D;
            margin-right: 20px;

            img {
                width: 100%;
            }
        }

        .additional-description {
            width: 350px;
            display: flex;
            flex-direction: column;
            padding: 20px;

            .additional-name {
                font-size: 15px;
                font-weight: 600;
                margin-bottom: 15px;
            }

            .additional-text {
                font-size: 10px;
                font-weight: 200;
            }
        }

        .additional-price-box {
            width: 120px;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .additional-price{
                font-size: 15px;
                font-weight: 500;
                color: #9f9f9f;
            }

            button {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #FFFFFF;
                border: 1.5px solid #125c13;
            }
        }
    }
`
export const ObservationContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .observation-box {
        width: 100%;
        max-width: 600px;
        height: 100%;
        background-color: #F4F4F4;
        border-radius: 5px;
        border: none;
        padding: 15px;

        &:focus {
            border-color: #bcbaba; 
            outline: none; 
  }
    }
`