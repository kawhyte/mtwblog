import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";

export default function Alert({ preview }) {
	return (
        <div
			className={cn("border-b", {
				"bg-gray-700 border-gray-700 text-white": preview,
				"bg-gray-100 border-gray-200": !preview,
			})}>
			<Container>
				<div className='py-2 text-center text-sm'>
					{preview ? (
						<>
							This page is a preview.{" "}
							<Link
                                href='/api/exit-preview'
                                className='underline hover:text-green-300 duration-200 transition-colors'>
								
									Click here
								{" "}
							</Link>
							to exit preview mode.
						</>
					) : (
						<>
							The source code for this blog is{" "}
							<a
								href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
								className='underline hover:text-blue-600 duration-200 transition-colors'>
								available on GitHub
							</a>
							.
						</>
					)}
				</div>
			</Container>
		</div>
    );
}
