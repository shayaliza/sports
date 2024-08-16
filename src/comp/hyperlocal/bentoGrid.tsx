import { FileTextIcon, InputIcon } from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

interface Feature {
  Icon: React.ElementType;
  name: string;
  // description: string;
  href: string;
  // cta: string;
  background: JSX.Element;
  className: string;
}

const features: Feature[] = [
  {
    Icon: InputIcon,
    name: "Store Setup",
    href: "/",
    background: (
      <div className="bg-white text-gray-900 p-6 rounded-lg">
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg text-gray-700">
            Digistall will set up the store for you
          </li>
          <li className="text-lg text-gray-700">
            Sellers onboarded with Digistall will place their inventory at the
            store
          </li>
        </ul>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 h-auto",
  },
  {
    Icon: FileTextIcon,
    name: "Things included in Package",
    href: "/",
    background: (
      <div className="bg-white text-gray-900 p-6 rounded-lg">
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg text-gray-700">
            Comprehensive package includes website templates, branding
            materials, Operational guidelines
          </li>
          <li className="text-lg text-gray-700">
            Additional services such as customising content, etc will also be
            provided.
          </li>
        </ul>
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 h-auto",
  },
  {
    Icon: FileTextIcon,
    name: "Marketing and Promotion",
    href: "/",
    background: (
      <div className="bg-white text-gray-900 p-6 rounded-lg">
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg text-gray-700">
            Get access to marketing materials and strategies to promote your
            platform locally.
          </li>
          <li className="text-lg text-gray-700">
            Guidance on digital marketing to upskill the business.
          </li>
        </ul>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 h-auto",
  },
  {
    Icon: InputIcon,
    name: "Store Setup 2",

    href: "/",

    background: (
      <div className="bg-white text-gray-900 p-6 rounded-lg">
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg text-gray-700">
            Digistall will set up the store for you
          </li>
          <li className="text-lg text-gray-700">
            Sellers onboarded with Digistall will place their inventory at the
            store
          </li>
        </ul>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 h-auto",
  },
];

export function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-32 w-2/3 m-auto  ">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
