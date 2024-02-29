function Logout({ color }: any) {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.41699 6.29922C7.67533 3.29922 9.21699 2.07422 12.592 2.07422H12.7003C16.4253 2.07422 17.917 3.56589 17.917 7.29089V12.7242C17.917 16.4492 16.4253 17.9409 12.7003 17.9409H12.592C9.24199 17.9409 7.70033 16.7326 7.42533 13.7826"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.4999 10H3.0166"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.87467 7.20703L2.08301 9.9987L4.87467 12.7904"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export default Logout;
