// // import { ProfileHeader } from "@/components/profile/ProfileHeader";
// // import { ProfileHeroCard } from "@/components/profile/ProfileHeroCard";
// // import { PlatformSettingsCard } from "@/components/profile/PlatformSettingsCard";
// // import { ProfileInformationCard } from "@/components/profile/ProfileInformationCard";
// // import { ConversationsCard } from "@/components/profile/ConversationsCard";

// // export default function ProfilePage() {
// //   return (
// //     <div className="space-y-6">
// //       <ProfileHeader />

// //       <ProfileHeroCard />

// //       <section className="grid gap-6 xl:grid-cols-3">
// //         <PlatformSettingsCard />

// //         <ProfileInformationCard />

// //         <ConversationsCard />
// //       </section>
// //     </div>
// //   );
// // }

// import { ConversationsCard } from "@/components/profile/ConversationsCard";
// import { PlatformSettingsCard } from "@/components/profile/PlatformSettingsCard";
// import { ProfileHeader } from "@/components/profile/ProfileHeader";
// import { ProfileHeroCard } from "@/components/profile/ProfileHeroCard";
// import { ProfileInformationCard } from "@/components/profile/ProfileInformationCard";

// export default function ProfilePage() {
//   return (
//     <div className="flex flex-col gap-6">
//       <ProfileHeader />

//       <ProfileHeroCard />

//       <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
//         <PlatformSettingsCard />

//         <ProfileInformationCard />

//         <ConversationsCard />
//       </section>
//     </div>
//   );
// }

import { ConversationsCard } from "@/components/profile/ConversationsCard";
import { PlatformSettingsCard } from "@/components/profile/PlatformSettingsCard";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileHeroCard } from "@/components/profile/ProfileHeroCard";
import { ProfileInformationCard } from "@/components/profile/ProfileInformationCard";

export default function ProfilePage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <ProfileHeader />

      <ProfileHeroCard />

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <PlatformSettingsCard />

        <ProfileInformationCard />

        <ConversationsCard />
      </section>
    </div>
  );
}