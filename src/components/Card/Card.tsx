import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, children }) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg bg-gray-100/70 backdrop-blur-md">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>

        {/* Card Body */}
        <div className="text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="p-4 bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <Card
          title="Card 1"
          imageUrl="https://source.unsplash.com/random/300x200"
        >
          <p>This is the content of the first card.</p>
          <p>More text can go here.</p>
        </Card>

        <Card
          title="Card 2"
          imageUrl="https://source.unsplash.com/random/301x201"
        >
          <p>Content for the second card.</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
          </ul>
        </Card>

        <Card
          title="Card 3 - Longer Title Example"
          imageUrl="https://source.unsplash.com/random/302x202"
        >
          <p>This card has a longer title.</p>
          <p>Even more content.</p>
          <p>And a final line.</p>
        </Card>
      </div>
    </div>
  );
};

export default App;