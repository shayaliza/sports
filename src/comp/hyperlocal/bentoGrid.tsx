import { FileTextIcon, InputIcon } from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

interface Feature {
  Icon: React.ElementType;
  name: string;
  description: string;
  href: string;
  cta: string;
  background: JSX.Element;
  className: string;
}

const features: Feature[] = [
  {
    Icon: FileTextIcon,
    name: "Marketing and Promotion",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
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
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-1 h-auto",
  },
  {
    Icon: InputIcon,
    name: "Store Setup",

    description: "Search through all your files in one place.",
    href: "/",
    cta: "Digistall will setup the store for you",

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
    name: "Marketing and Promotion2",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
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

    description: "Search through all your files in one place.",
    href: "/",
    cta: "Digistall will setup the store for you",

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
