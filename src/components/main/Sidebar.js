import styled from 'styled-components';

const SideBar = styled.div`
    width: 40%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: linear-gradient(
            rgba(32, 30, 96, 0.8),
            rgba(32, 30, 96, 0.8)
        ),
        url('assets/shattered-island.gif');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 200px;
`;

export default SideBar;
