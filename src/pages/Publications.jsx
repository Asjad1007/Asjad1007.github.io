import { BookMarked, NotebookPen, ScrollText } from "lucide-react";

export default function Publications() {
  return (
    <div className="min-h-screen px-6 py-20 text-white">
      <h1 className="flex items-center justify-center gap-3 text-4xl font-bold text-center mb-10">
        <BookMarked size={28} />
        Publications & Patents
      </h1>

      <ul className="max-w-4xl mx-auto space-y-8 text-lg">
        {/* Patent */}
        <li className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow">
          <div className="flex items-center gap-2 mb-2 font-semibold text-xl">
            <NotebookPen size={22} />
            Patent: MediLog
          </div>
          <div>
            <span className="text-gray-300">German Patent File No:</span>{" "}
            <strong>DE202023102823U1</strong>
          </div>
          <a
            href="https://register.dpma.de/DPMAregister/pat/register?AKZ=2020231028233&CURSOR=0"
            className="text-blue-400 underline mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Patent
          </a>
        </li>

        {/* Paper 1 */}
        <li className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow">
          <div className="flex items-center gap-2 mb-2 font-semibold text-xl">
            <ScrollText size={22} />
            Face Mask Detection & Attendance System
          </div>
          <div className="text-gray-300">
            Published in IRJET (Impact Factor: 7.529)
          </div>
          <a
            href="https://www.irjet.net/archives/V8/i6/IRJET-V8I6601.pdf"
            className="text-blue-400 underline mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Paper
          </a>
        </li>

        {/* Paper 2 */}
        <li className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow">
          <div className="flex items-center gap-2 mb-2 font-semibold text-xl">
            <ScrollText size={22} />
            Crowdfunding for Engineering Startups using Blockchain
          </div>
          <div className="text-gray-300">
            Published in IJRAR (Impact Factor: 7.17)
          </div>
          <a
            href="https://www.ijrar.org/viewfull.php?&p_id=IJRAR22B1545"
            className="text-blue-400 underline mt-2 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Paper
          </a>
        </li>
      </ul>
    </div>
  );
}
