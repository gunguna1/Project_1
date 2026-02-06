import React from 'react';
export default function Card({ img, name, subtitle }) {
  return (
    <div className="w-64 rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <img
        src={img}
        alt={name}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-base font-semibold text-gray-900">
          {name}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-gray-600">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

        
