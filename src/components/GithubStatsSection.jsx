import React from "react";
import GitHubCalendar from "react-github-calendar";
import { subYears, startOfMonth } from "date-fns";

export const GithubStatsSection = () => {
  return (
    <section
      id="github"
      className="min-h-screen px-6 py-16 text-center bg-gradient-to-b from-white via-indigo-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-12">
        My <span className="text-primary">GitHub</span> Statistics
      </h1>

      {/* Stats Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-16">
        {/* Overall Stats */}
        <div className="w-full md:w-1/2 flex justify-center">
        <img
  src="https://github-readme-stats.vercel.app/api?username=aayush4ever&show_icons=true&theme=tokyonight&hide_border=false&count_private=true"
  alt="Aayush's GitHub stats"
  className="rounded-lg shadow-lg max-w-full h-auto"
/>

        </div>

        {/* Top Languages */}
        <div className="w-full md:w-1/2 flex justify-center">
        <img
  src="https://github-readme-stats.vercel.app/api/top-langs/?username=aayush4ever&layout=compact&theme=tokyonight&hide_border=false"
  alt="Aayush's top languages"
  className="rounded-lg shadow-lg max-w-full h-auto"
/>

        </div>
      </div>

      {/* GitHub Streak */}
      <div className="flex justify-center mb-16">
        <img
          src="https://streak-stats.demolab.com?user=aayush4ever&theme=tokyonight&hide_border=false"
          alt="GitHub Streak"
          className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contribution Calendar */}
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
        My GitHub Contributions
      </h2>
      <div className="border rounded-2xl shadow-xl bg-white dark:bg-gray-800 p-6 overflow-x-auto mx-auto max-w-4xl">
        <GitHubCalendar
          username="aayush4ever"
          blockSize={14}
          blockMargin={7}
          fontSize={14}
          colorScheme="light"
          transformData={(contributions) => {
            const cutoff = startOfMonth(subYears(new Date(), 1));
            return contributions.filter(
              (day) => new Date(day.date) >= cutoff
            );
          }}
        />
      </div>
    </section>
  );
};

