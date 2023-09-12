import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-grey-0);
  font-weight: 600;
  height: auto;
  position: fixed;
  z-index: 100;
  width: 100vw;

  .header_up {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primary);
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .header_up_right_contacts {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-8);
    text-align: center;
    gap: 1rem;
    width: fit-content;
  }

  #header_contacts_phone,
  #header_contacts_email {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  #header_contacts_adress {
    display: flex;
    justify-content: space-around;
    align-items: top;
    gap: 0.5rem;
  }

  #header_p_adress {
    width: fit-content;
  }

  .header_up_right_contacts {
    line-height: 14px;
  }

  #header_nav_list {
    display: none;
  }

  .header_down {
    display: flex;
    justify-content: space-between;
    height: max-content;
    padding: 0.5rem;
    background-color: white;
  }

  .header_down_left_logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #header_logo {
    height: 3rem;
  }

  #header_logo_anchor {
    display: flex;
  }

  .header_nav_button {
    font-size: var(--font-size-6);
    color: #343b41;
    font-weight: 500;
  }

  .home,
  .whoAreUs,
  .area,
  .clients,
  .contact {
    display: none;
  }

  #instagram_icon,
  #facebook_icon,
  #linkedIn_icon,
  #youTube_icon {
    background-color: transparent;
    color: var(--color-grey-0);
    border: none;
    width: 40px;
    height: max-content;
    font-size: var(--font-size-);
    align-items: center;
  }

  .menu_button {
    width: 55px;
    height: 55px;
    font-size: 30px;
    color: var(--color-grey-1);
    border: 0.25px solid var(--color-grey-1);
    border-radius: 5%;
  }

  .hidden {
    display: block;
  }

  .header_nav_button:focus {
    border: none;
    border-radius: none;
  }

  button:focus {
    border: none;
    border-radius: none;
  }

  @media (min-width: 1023px) {
    .header_up {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      padding: 1rem;
    }
    .header_up_right_contacts {
      flex-direction: row;
      justify-content: center;
      gap: 2.5rem;
    }

    #header_logo {
      margin-left: 1rem;
    }

    #header_nav_list {
      display: flex;
      list-style: none;
      background-color: transparent;
      gap: 2.5rem;
      padding-right: 7rem;
    }

    .header_nav_item {
      margin: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header_nav_item:focus {
      border: none;
      border-radius: none;
    }

    .header_nav_button {
      background-color: transparent;
      border: none;
      font-weight: 600;
      color: var(--color-grey-1);
      padding: 0.25rem;
      font-size: var(--font-size-7);
    }

    .header_nav_button:hover {
      color: var(--color-grey-3);
    }

    button {
      cursor: pointer;
    }
  }
`;
