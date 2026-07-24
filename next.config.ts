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
      {
        source: "/subjects/mathematics/differentiation",
        destination: "/subjects/mathematics/derivatives",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/integration",
        destination: "/subjects/mathematics/integrals",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/applications-of-integration",
        destination: "/subjects/mathematics/applications-of-definite-integrals",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/infinite-series",
        destination: "/subjects/mathematics/infinite-sequences-and-series",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/differentiation/derivative-from-first-principles",
        destination: "/subjects/mathematics/derivatives/tangents-and-the-derivative-at-a-point",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/differentiation/differentiation-rules",
        destination: "/subjects/mathematics/derivatives/differentiation-rules",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/differentiation/higher-order-and-special-derivatives",
        destination: "/subjects/mathematics/derivatives/the-derivative-as-a-function",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/applications-of-derivatives/increasing-decreasing-and-extrema",
        destination: "/subjects/mathematics/applications-of-derivatives/monotonic-functions-and-the-first-derivative-test",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/applications-of-derivatives/optimization-problems",
        destination: "/subjects/mathematics/applications-of-derivatives/applied-optimization",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/applications-of-derivatives/kinematics-and-rates",
        destination: "/subjects/mathematics/derivatives/the-derivative-as-a-rate-of-change",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/applications-of-derivatives/rolles-and-the-mean-value-theorem",
        destination: "/subjects/mathematics/applications-of-derivatives/the-mean-value-theorem",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/integration/antiderivatives-and-the-indefinite-integral",
        destination: "/subjects/mathematics/applications-of-derivatives/antiderivatives",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/integration/the-definite-integral-and-the-fundamental-theorem",
        destination: "/subjects/mathematics/integrals/the-fundamental-theorem-of-calculus",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/integration/substitution-and-integration-by-parts",
        destination: "/subjects/mathematics/techniques-of-integration/integration-by-parts",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/integration/advanced-techniques",
        destination: "/subjects/mathematics/techniques-of-integration/using-basic-integration-formulas",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/applications-of-integration/areas-and-volumes",
        destination: "/subjects/mathematics/applications-of-definite-integrals/volumes-using-cross-sections",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/applications-of-integration/integrals-in-science-and-beyond",
        destination: "/subjects/mathematics/applications-of-definite-integrals/work-and-fluid-forces",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/infinite-series/sequences-and-series-convergence",
        destination: "/subjects/mathematics/infinite-sequences-and-series/infinite-series",
        permanent: true,
      },
      {
        source: "/subjects/mathematics/infinite-series/taylor-and-maclaurin-series",
        destination: "/subjects/mathematics/infinite-sequences-and-series/taylor-and-maclaurin-series",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
