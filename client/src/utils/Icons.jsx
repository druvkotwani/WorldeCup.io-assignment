import React from "react";
export const SearchIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path
            d="M22 22L20 20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);
export const UserIcon = ({ width = '24', height = '24' }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
            <path fill="currentColor" d="M15 2H9v2H7v6h2V4h6zm0 8H9v2h6zm0-6h2v6h-2zM4 16h2v-2h12v2H6v4h12v-4h2v6H4z" />
        </svg>
    );
};

export const SendIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634L21.044 2.32c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8l-8 6z" />
    </svg>
);

export const LogoutIcon = ({ width = '24', height = '24' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path fill="currentColor" d="M5 3h16v4h-2V5H5v14h14v-2h2v4H3V3zm16 8h-2V9h-2V7h-2v2h2v2H7v2h10v2h-2v2h2v-2h2v-2h2z" />
    </svg>
);

export const UsersIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M11 0H5v2H3v6h2v2h6V8H5V2h6zm0 2h2v6h-2zM0 14h2v4h12v2H0zm2 0h12v-2H2zm14 0h-2v6h2zM15 0h4v2h-4zm4 8h-4v2h4zm0-6h2v6h-2zm5 12h-2v4h-4v2h6zm-6-2h4v2h-4z" />
        </svg>
    )
}

export const ChatIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path fill="currentColor" d="M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2z" />
        </svg>
    )
}

export const TrophyIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16 3H6v2H2v10h6V5h8v10h6V5h-4V3zm4 4v6h-2V7zM6 13H4V7h2zm12 2H6v2h12zm-7 2h2v2h3v2H8v-2h3z" />
        </svg>
    )
}

export const SettingIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="currentColor" d="M13 3h-2v2h2zm4 2h2v2h-2zm-6 6h2v2h-2zm-8 0h2v2H3zm18 0h-2v2h2zM5 5h2v2H5zm14 14h-2v-2h2zm-8 2h2v-2h-2zm-4-2H5v-2h2zM9 7h6v2H9zm0 8H7V9h2zm0 0v2h6v-2h2V9h-2v6z" />
        </svg>
    )
}