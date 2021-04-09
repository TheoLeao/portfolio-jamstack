
import Head from 'next/head'
export const GlobalHead = () => {
    return (
        <>
            <Head>
                <style>
                    {
                        `#__next {
                            width:100%;
                            margin: 0;
                            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                            font-size: 1rem;
                            font-weight: 400;
                            line-height: 1.5;
                            color: #212529;
                            text-align: left;
                            background-color: #fff;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale; 
                            text-rendering: optimizeLegibility;
                            display:flex;
                            flex-direction: column;
                            align-items:center;
                            }
                        `}
                </style>
            </Head>
        </>
    )
}

export default GlobalHead;