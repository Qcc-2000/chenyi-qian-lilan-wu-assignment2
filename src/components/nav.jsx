import MaxWidth from "./maxWidth";

export default function Nav() {
  return (
    <div className="sticky inset-x-0 top-0 z-30 w-full">
      <MaxWidth>
        <div className="flex justify-between items-center h-10 border-b border-gray-200">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-red-900">
              Conway’s Game of Life
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-red-900">Page1</div>
            <div className="text-red-900">Page2</div>
            <div className="text-red-900">Page3</div>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
}
