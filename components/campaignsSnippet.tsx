import useCampaigns from "../hooks/useCampaigns";
import { CampaignCard, CampaignCardSkeleton } from "./cards/campaign-card";

const CampaignsSnippet = () => {
  let campaigns = useCampaigns()
  campaigns = campaigns?.slice(0, 3);
  const CampaignCards = campaigns?.map((campaign, index) => {
    const { description, merchandise, active, brand, id, name } = campaign;
      return <CampaignCard  
          brand={brand.name}
          image={brand.logo}
          name={name}
          about={description}
          bgColor={brand.logoBgColor}
          id={id}
          key={index}
          brandId={brand.id}
          merchandise={merchandise}
          active={active}
        />
  })

  const skeletons = [
    <CampaignCardSkeleton key={0} />,
    <CampaignCardSkeleton key={1} />,
    <CampaignCardSkeleton key={2} />
  ]

  return <>
    {CampaignCards || skeletons}
  </>
}

export default CampaignsSnippet;