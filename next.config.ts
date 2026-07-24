import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    dirs: ["src", "tests"],
  },
  async redirects() {
    return [
      {
        source: "/subjects/mathematics/right-triangle-trigonometry",
        destination: "/subjects/mathematics/foundations-of-trigonometry",
        permanent: true,
      },
      {
        source:
          "/subjects/mathematics/right-triangle-trigonometry/sine-cosine-and-tangent",
        destination:
          "/subjects/mathematics/foundations-of-trigonometry/sine-cosine-and-tangent",
        permanent: true,
      },
      {
        source:
          "/subjects/mathematics/right-triangle-trigonometry/angles-of-elevation-and-depression",
        destination:
          "/subjects/mathematics/foundations-of-trigonometry/angles-of-elevation-and-depression",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/the-unit-circle-and-identities",
        destination: "/subjects/mathematics/foundations-of-trigonometry",
        permanent: true,
      },
      {
        source:
          "/subjects/mathematics/the-unit-circle-and-identities/radians-and-the-unit-circle",
        destination:
          "/subjects/mathematics/foundations-of-trigonometry/radians-and-the-unit-circle",
        permanent: true,
      },
      {
        source:
          "/subjects/mathematics/the-unit-circle-and-identities/fundamental-identities",
        destination:
          "/subjects/mathematics/trigonometric-identities/fundamental-identities",
        permanent: true,
      },
      {
        source:
          "/subjects/mathematics/the-unit-circle-and-identities/compound-and-double-angle-formulas",
        destination:
          "/subjects/mathematics/trigonometric-identities/compound-and-double-angle-formulas",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/trigonometric-equations-and-applications",
        destination: "/subjects/mathematics/trigonometric-equations",
        permanent: true,
      },
      {
        source:
          "/subjects/mathematics/trigonometric-equations-and-applications/trigonometric-equations",
        destination:
          "/subjects/mathematics/trigonometric-equations/trigonometric-equations",
        permanent: true,
      },
      {
        source:
          "/subjects/mathematics/trigonometric-equations-and-applications/law-of-sines-and-law-of-cosines",
        destination:
          "/subjects/mathematics/beyond-right-triangles/law-of-sines-and-law-of-cosines",
        permanent: true,
      },
      {
        source:
          "/subjects/mathematics/trigonometric-equations-and-applications/modeling-with-trigonometric-functions",
        destination:
          "/subjects/mathematics/trigonometric-graphs-and-applications-of-radian-measure/modeling-with-trigonometric-functions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
