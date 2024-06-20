import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSceleton = () => {
  return (
    <div>
      <Card width="300px" borderRadius="10px" overflow="hidden">
        <Skeleton height="200px"></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCardSceleton;
