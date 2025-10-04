import React from "react";

const DealuxoFeatures = () => {
  const featureData = [
    {
      title: "Smarter than brain.",
      description:
        "Trained on thousands of unique and complex data units for analyzing the best result.",
      icon: "🌟", // Add your own icon or use an icon library like FontAwesome
    },
    {
      title: "Anytime available.",
      description:
        "Always delivered on time no delay you can get your response while you think another idea.",
      icon: "⏰",
    },
    {
      title: "Power-ups.",
      description:
        "Unlock more power with powerful automations for connecting multiple platforms. Never tired always on duty.",
      icon: "⚡",
    },
    {
      title: "Fun to use.",
      description:
        "Made for non-techies. Easy-to-use interface that anyone can get started with.",
      icon: "😊",
    },
    {
      title: "Go global.",
      description: "Its open to work on any place in the planet.",
      icon: "🌍",
    },
    {
      title: "Script AI.",
      description:
        "Link websites, files and share core knowledge across all your helpers.",
      icon: "🧠",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="bg-white  rounded-lg p-6 flex flex-col items-center text-center"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealuxoFeatures;
