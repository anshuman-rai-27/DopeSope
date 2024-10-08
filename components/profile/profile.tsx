
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Image from "next/image";
import FractalDotGrid from "../common/bg";
import FractalDotGridExample from "../common/faractualgrid";
import { RainbowButton } from "@/components/ui/rainbow-button";
// col-span-1 md:col-span-2 lg:col-span-1
const Profile: React.FC = () => {
  return (
    <>
    {/* <FractalDotGrid/> */}
    <FractalDotGridExample/>
    <div className=" text-foreground p-4 sm:p-8 md:p-12 lg:p-16 lg:px-[15vw] lg:py-[10vw] z-10 ">
      
      <div className="text-3xl font-bold mb-[3vw] z-50">Your Progress</div>
      <div className="flex justify-between gap-4">
        <Card className="
      bg-transparent
        ">
          <CardHeader>
            <CardTitle className="text-3xl">Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://picsum.photos/200" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold">User Name</h2>
                <p className="text-muted-foreground">user@example.com</p>
              </div>
            </div>
            <div>
              <RainbowButton>Share on socials</RainbowButton>
            </div>
            </div>
            <div className="mt-5">
              State: Uttar Pradesh
            </div>
            <div>
              Sports: Sprinting
            </div>
            <div className="text-2xl font-semibold my-4">Badges:</div>
            <div className="mt-4 flex space-x-4">
            <Image
            src="/badges/ch.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className=" h-[10vw] w-[10vw] hover:scale-110 transition-transform duration-300 ease-in-out "
          />
          <Image
            src="/badges/hr.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className=" h-[10vw] w-[10vw] hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <Image
            src="/badges/cl.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className=" h-[10vw] w-[10vw] hover:scale-110 transition-transform duration-300 ease-in-out"
          />
              {/* <Badge>Badge 1</Badge>
          <Badge variant="secondary">Badge 2</Badge> */}
            </div>
          </CardContent>
        </Card>
        {/* <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Points & Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <ion-icon size="large" name="trophy"></ion-icon>
              <div>
                <p className="text-lg font-bold">1200 Point</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center space-x-4">
                <ion-icon size="large" name="ribbon"></ion-icon>
                <div>
                  <p className="text-lg font-bold">5 Badges</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}
        <div  className=" h-[25vw] w-[25vw] rounded-lg flex items-end group">
        <Image
            src="/avatar/ava_orange.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-2xl h-[25vw] w-[25vw] absolute group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        <div className="z-10  flex ml-5 mb-5">
            {/* <ion-icon size="large" name="trophy"></ion-icon> */}
            <div className="z-10">
              <p className="text-lg font-bold text-white group-hover:scale-110 transition-transform group-hover:-translate-x-4 group-hover:translate-y-4 duration-300 ease-in-out">1200 Point</p>
            </div>
          </div>
          
        </div>

      </div>
    </div>
    </>

  );
}

export default Profile;