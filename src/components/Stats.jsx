import React from 'react';

const Stats = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">数据统计</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium text-gray-400 mb-2">胜率</h3>
            <p className="text-3xl font-bold text-green-400">52.39%</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium text-gray-400 mb-2">登场率</h3>
            <p className="text-3xl font-bold text-blue-400">9.31%</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium text-gray-400 mb-2">难度</h3>
            <p className="text-3xl font-bold text-yellow-400">中等</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;