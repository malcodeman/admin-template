import { AspectRatio, Text, Link as Chakralink } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

type Props = {
  id: number;
  image_url: string;
  name: string;
  permalink: string;
};

const Asset = (props: Props) => {
  const { id, image_url, name, permalink } = props;
  return (
    <Chakralink href={permalink} isExternal>
      <AspectRatio mb={"2"}>
        <Image src={image_url} alt="" borderRadius={"lg"} />
      </AspectRatio>
      <Text fontSize={"small"} textTransform={"uppercase"} textAlign={"center"}>
        {name}
      </Text>
      <Text
        fontSize={"x-small"}
        textTransform={"uppercase"}
        textAlign={"center"}
      >
        {id}
      </Text>
    </Chakralink>
  );
};

export default Asset;
