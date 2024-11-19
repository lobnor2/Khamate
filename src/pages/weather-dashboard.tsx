import WeatherSkeleton from "@/components/loading-skeleton";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { AlertTriangle, MapPin, RefreshCcw } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const WeatherDashboard = () => {
  const {
    coordinates,
    error: locationError,
    isLoading: locationLoading,
    getLocation,
  } = useGeolocation();
  // console.log(coordinates);

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      //reload weather data
    }
    // window.location.reload();
  };

  if (locationLoading) {
    return (
      <>
        <WeatherSkeleton />
      </>
    );
  }
  if (locationError) {
    return (
      <Alert>
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription>
          <p>{locationError}</p>{" "}
          <Button
            onClick={getLocation}
            variant="outline"
            className="w-fit mt-2"
          >
            <MapPin className="" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }
  if (!coordinates) {
    return (
      <Alert>
        <AlertTriangle className="h-5 w-5" />
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription>
          <p>Please enable location access to see your local weather.</p>
          <Button className="w-fit" variant="outline">
            <MapPin className="" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }
  return (
    <div className="border border-green-600 space-y-4">
      {/* Fav city */}
      <div className="flex items-center justify-between border border-red-600">
        <h1 className="text-xl font-normal tracking-tight">My Location</h1>
        <Button
          variant="outline"
          size={"icon"}
          onClick={handleRefresh}
          // disabled={}
        >
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>
      {/* Current hourly weather */}
    </div>
  );
};

export default WeatherDashboard;
