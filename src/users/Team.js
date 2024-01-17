import React from "react";
import Navbar2 from "./Navbar2";

function Team() {
  return (
    <div>
      <Navbar2 />
      <div class="py-20 bg-gray-50">
        <div class="container mx-auto px-6 md:px-12 xl:px-32 py-10">
          <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Admin Team</h2>
            <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Customer relationship management (CRM) is a technology for managing all your company's relationships and interactions with customers and potential customers.</p>
          </div>
          <div class="grid gap-12 items-center md:grid-cols-3">
            <div class="space-y-4 text-center">
              <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="./images/vasanthi.png" alt="Vasanthi" loading="lazy" width="640" height="805" />
              <div>
                <h4 class="text-2xl">Vasanthi Sirikonda</h4>
                <span class="block text-sm text-gray-500">Associate Software Engineer</span>
              </div>
            </div>
            <div class="space-y-4 text-center">
              <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                src="./images/yash.png" alt="YashRaj" loading="lazy" width="1000" height="667" />
              <div>
                <h4 class="text-2xl">YashRaj Tiwari</h4>
                <span class="block text-sm text-gray-500">Associate Software Engineer</span>
              </div>
            </div>
            <div class="space-y-4 text-center">
              <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="./images/chawan.png" alt="Chawan" loading="lazy" width="1000" height="667" />
              <div>
                <h4 class="text-2xl">Laxmi Kanth</h4>
                <span class="block text-sm text-gray-500">Associate Software Engineer</span>
              </div>
            </div>
            <div class="space-y-4 text-center">
              <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="./images/shashank.png" alt="Shashank" loading="lazy" width="1000" height="667" />
              <div>
                <h4 class="text-2xl">Shashank Chakravarthi</h4>
                <span class="block text-sm text-gray-500">Associate Software Engineer</span>
              </div>
            </div>
            <div class="space-y-4 text-center">
              <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="./images/nithin.png" alt="Nithin Kumar" loading="lazy" width="1000" height="667" />
              <div>
                <h4 class="text-2xl">Nithin Kumar</h4>
                <span class="block text-sm text-gray-500">Associate Software Engineer</span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
{/* <div class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 md:px-12 xl:px-32">
                <div class="mb-16 text-center">
                    <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Admin Team</h2>
                    <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Customer relationship management (CRM) is a technology for managing all your company's relationships and interactions with customers and potential customers.</p>
                </div>
                <div class="grid gap-12 items-center md:grid-cols-3">
                    <div class="space-y-4 text-center">
                        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src="https://media.licdn.com/dms/image/C5603AQHryGE-W7vSnA/profile-displayphoto-shrink_800_800/0/1640177063034?e=2147483647&v=beta&t=7OSMGMGKBMjWKs14cej8wgqkO9pxgmmS7xfgotz9I-s" alt="woman" loading="lazy" width="640" height="805" />
                        <div>
                            <h4 class="text-2xl">Vasanthi Sirikonda</h4>
                            <span class="block text-sm text-gray-500">CEO-Founder</span>
                        </div>
                    </div>
                    <div class="space-y-4 text-center">
                        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                            src="https://tailus.io/sources/blocks/classic/preview/images/man.jpg" alt="women" loading="lazy" width="1000" height="667" />
                        <div>
                            <h4 class="text-2xl">Sudheshna Bandari</h4>
                            <span class="block text-sm text-gray-500">Chief Technical Officer</span>
                        </div>
                    </div>
                    <div class="space-y-4 text-center">
                        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src="https://media.licdn.com/dms/image/C5603AQFdmB-M0CYrWw/profile-displayphoto-shrink_800_800/0/1628178070507?e=2147483647&v=beta&t=OrBQSkzpokicOJAgxsP2haXM12-hLwI-YdLx4xpXJKE" alt="woman" loading="lazy" width="1000" height="667" />
                        <div>
                            <h4 class="text-2xl">Swetha Mohana Susarla</h4>
                            <span class="block text-sm text-gray-500">Chief Operations Officer</span>
                        </div>
                    </div>
                    <div class="space-y-4 text-center">
                        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src="https://media.licdn.com/dms/image/C5603AQFdmB-M0CYrWw/profile-displayphoto-shrink_800_800/0/1628178070507?e=2147483647&v=beta&t=OrBQSkzpokicOJAgxsP2haXM12-hLwI-YdLx4xpXJKE" alt="woman" loading="lazy" width="1000" height="667" />
                        <div>
                            <h4 class="text-2xl">Swetha Mohana Susarla</h4>
                            <span class="block text-sm text-gray-500">Chief Operations Officer</span>
                        </div>
                    </div>
                    <div class="space-y-4 text-center">
                        <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                            src="https://media.licdn.com/dms/image/C5603AQFdmB-M0CYrWw/profile-displayphoto-shrink_800_800/0/1628178070507?e=2147483647&v=beta&t=OrBQSkzpokicOJAgxsP2haXM12-hLwI-YdLx4xpXJKE" alt="woman" loading="lazy" width="1000" height="667" />
                        <div>
                            <h4 class="text-2xl">Swetha Mohana Susarla</h4>
                            <span class="block text-sm text-gray-500">Chief Operations Officer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}