import { Sparkles } from "lucide-react";

import type { TeamMember } from "../data/team";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-sm font-medium text-pink-400">
            {member.role}
          </p>

          <h3 className="mt-1 font-serif text-2xl font-bold text-white">
            {member.name}
          </h3>
        </div>
      </div>

      {/* Informations */}
      <div className="p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
            <Sparkles size={17} />
          </div>

          <p className="text-sm leading-6 text-neutral-600">
            {member.specialty}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TeamCard;