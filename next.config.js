module.exports = {
  output: 'export',
  trailingSlash: true, 
  images: {
    domains: ['res.cloudinary.com', 'assets.aceternity.com'], // Include allowed image domains
    unoptimized: true, // Disable image optimization for static export
  },
};
