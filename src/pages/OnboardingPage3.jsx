import { FiSearch, FiMenu } from "react-icons/fi";

export default function OnboardingPage3() {
  return (
    <div>
        <div className="flex justify-between px-4 py-3 bg-gray-50 shadow-md sticky top-0 left-0 right-0 z-50">
            <div className="bg-bgcol text-white h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-xl p-1 text-2xl">
            <FiMenu />
            </div>
            <div className="border border-bgcol h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-xl text-2xl">
            <FiSearch />
            </div>
        </div>
        OnboardingPage3
    </div>
  )
}
