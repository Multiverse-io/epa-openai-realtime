import { Button, Illustrations } from '@multiverse-io/stardust-react';

const PortifolioBanner = () => {
  return (
    <div className="max-w-2xl pb-1 mb-1">
      <h1 className="text-3xl leading-tight font-semibold mb-5">
        Data Fellowship Portifolio
      </h1>
      <div className="bg-[#F5F7FF] p-4 rounded-md flex items-center justify-between">
        <div>
          <h2 className="bg-[#DDFC9D] w-fit p-1 mb-2 rounded-sm text-4xl leading-tight font-medium">
            Nice work!
          </h2>
          <p className="text-m leading-normal font-regular">
            You've submitted your final portfolio - get ready for the final
            interview by practicing with our <strong>AI prep coach.</strong>
          </p>
          <Button variant="secondary" size="small" className="mt-2">
            Download portifolio
          </Button>
        </div>
        <Illustrations.Decorative.Certificate width={200} />
      </div>
    </div>
  );
};

export default PortifolioBanner;
