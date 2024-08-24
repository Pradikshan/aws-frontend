import React from "react";

const FAQ = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-8 mt-36 text-white">
      <div className="flex flex-col">
        <p className="text-4xl font-bold mb-2">Frequently asked questions</p>
        <p className="">
          Can’t find the answer you’re looking for? Reach out to our customer
          support team.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="mb-5">
          <p className="font-semibold mb-2">
            What makes DreamStreamer different from other music streaming
            services?
          </p>
          <p>
            DreamStreamer uses advanced AI to personalize your music experience.
            Our platform learns your preferences over time, curating playlists
            and recommending new music that aligns perfectly with your taste.
          </p>
        </div>

        <div className="mb-5">
          <p className="font-semibold mb-2">
            How can I create a personalized playlist?
          </p>
          <p>
            DreamStreamer automatically generates personalized playlists for you
            based on your listening habits. You can also create your own
            playlists by selecting your favorite songs, artists, or albums.
          </p>
        </div>

        <div className="mb-5">
          <p className="font-semibold mb-2">
            Is DreamStreamer available on mobile devices?
          </p>
          <p>
            Yes, DreamStreamer is available on both iOS and Android devices. You
            can download our app from the App Store or Google Play to enjoy your
            personalized music experience on the go.
          </p>
        </div>

        <div className="mb-5">
          <p className="font-semibold mb-2">Can I use DreamStreamer offline?</p>
          <p>
            Yes! With our Premium plan, you can download your favorite tracks,
            albums, and playlists to listen to offline, ensuring you never miss
            a beat, even without an internet connection.
          </p>
        </div>

        <div className="mb-5">
          <p className="font-semibold mb-2">
            How does DreamStreamer ensure the security of my data?
          </p>
          <p>
            We take your privacy seriously. DreamStreamer employs
            industry-standard encryption and security protocols to protect your
            data. Your information is never shared with third parties without
            your consent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
