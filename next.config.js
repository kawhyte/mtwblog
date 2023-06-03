
/** @type {import('next').NextConfig} */
const nextConfig = {
		images: {
		domains: ["cdn.sanity.io", "res.cloudinary.com"],
	},
	reactStrictMode: true,
 }
 module.exports = nextConfig


// const withPWA = require("next-pwa");

// module.exports = withPWA({
// 	images: {
// 		domains: ["cdn.sanity.io", "res.cloudinary.com"],
// 	},
// 	pwa: {
// 		dest: "public",
// 		register: true,
// 		skipWaiting: true,
// 		disable: process.env.NODE_ENV === 'development',
// 	},
// });


// const path = require("path");
// const withPWAInit = require("next-pwa");

// /** @type {import('next-pwa').PWAConfig} */
// const withPWA = withPWAInit({
// 		images: {
// 		domains: ["cdn.sanity.io", "res.cloudinary.com"],
// 	},
//   dest: "public",
//   // Solution: https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1399683017
//   buildExcludes: ["app-build-manifest.json"],
  
// });

// const generateAppDirEntry = (entry) => {
//   const packagePath = require.resolve('next-pwa');
//   const packageDirectory = path.dirname(packagePath);
//   const registerJs = path.join(packageDirectory, "register.js");

//   return entry().then((entries) => {
//     // Register SW on App directory, solution: https://github.com/shadowwalker/next-pwa/pull/427
//     if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
//       if (Array.isArray(entries["main-app"])) {
//         entries["main-app"].unshift(registerJs);
//       } else if (typeof entries["main-app"] === "string") {
//         entries["main-app"] = [registerJs, entries["main-app"]];
//       }
//     }
//     return entries;
//   });
// };

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config) => {
//     const entry = generateAppDirEntry(config.entry);
//     config.entry = () => entry;

//     return config;
//   },
// };