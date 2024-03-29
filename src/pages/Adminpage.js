// material
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import {
  getDwarTokenContract,
  getDwarCharacterContract,
  getDwarMountContract,
  getDwarPetContract,
} from "utils/contractHelpers";
import { useEthers } from "@usedapp/core";
import { MetamaskErrorMessage } from "utils/MetamaskErrorMessage";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import formatBigNumber from "utils/formatBigNumber";

export default function Inventorypage() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState();
  const [tokenAmount, setTokenAmount] = useState(1);
  const [price, setPrice] = useState(0);
  const [text, setText] = useState(0);
  const { library, account } = useEthers();
  const signer = library?.getSigner();
  const DwarTokenContract = getDwarTokenContract(signer);
  const DwarCharacterContract = getDwarCharacterContract(signer);
  const DwarMountContract = getDwarMountContract(signer);
  const DwarPetContract = getDwarPetContract(signer);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const OwnedCharacter = await DwarTokenContract.tokenOfOwnerByIndex(
  //         account,
  //         0
  //       );
  //       setOwnedCharacter(formatBigNumber(OwnedCharacter));
  //     } catch (error) {
  //       setOwnedCharacter(null);
  //     }
  //   };
  //   if (account) fetchData();
  // }, [DwarCharacterContract, account]);

  const handleWithdraw = async () => {
    try {
      const result = await DwarTokenContract.withdraw();
      toast.success("You bought dwar tokens successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(
        "The liquidity is locked now. You can withdraw funds after liquidity is unlocked."
      );
    }
  };

  const handleTokenWithdraw = async () => {
    try {
      const result = await DwarTokenContract.withdrawTokens(
        ethers.utils.parseEther(tokenAmount)
      );
      toast.success("You withdraw dwar tokens successfully!");
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
      // toast.error(
      //   "You already withdraw funds. You have to provide liquidity pool to withdraw funds again."
      // );
    }
  };

  const handleChangePrice = async () => {
    try {
      const result = await DwarTokenContract.setPrice(
        ethers.utils.parseEther(price)
      );
      toast.success("You set price successfully!");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleMintCharacter = async () => {
    try {
      const result = await DwarCharacterContract.reserveNFTs(amount);
      toast.success("You mint characters successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handleMintMount = async () => {
    try {
      const result = await DwarMountContract.reserveNFTs(amount);
      toast.success("You mint mounts successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handleMintPet = async () => {
    try {
      const result = await DwarPetContract.reserveNFTs(amount);
      toast.success("You mint pets successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handlePriceCharacter = async () => {
    try {
      const result = await DwarCharacterContract.setPrice(
        ethers.utils.parseEther(price)
      );
      toast.success("You set price successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handlePriceMount = async () => {
    try {
      const result = await DwarMountContract.setPrice(
        ethers.utils.parseEther(price)
      );
      toast.success("You set price successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handlePricePet = async () => {
    try {
      const result = await DwarPetContract.setPrice(
        ethers.utils.parseEther(price)
      );
      toast.success("You set price successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handleAddress = async () => {
    try {
      const result = await DwarPetContract.setFounderAddress(text);
      toast.success("You set price successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  const handleTokenAddress = async () => {
    try {
      const result = await DwarPetContract.setDwarTokenAddress(text);
      toast.success("You set price successfully!");
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      toast.error(MetamaskErrorMessage(error));
    }
  };

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const result1 = await DwarPetContract.charityAddress();
        const result2 = await DwarPetContract.devAddress();
        const result3 = await DwarPetContract.lpAddress();
        const result4 = await DwarPetContract.founderAddress();
        const result5 = await DwarPetContract.rewardAddress();

        const result11 = await DwarCharacterContract.charityAddress();
        const result12 = await DwarCharacterContract.devAddress();
        const result13 = await DwarCharacterContract.lpAddress();
        const result14 = await DwarCharacterContract.founderAddress();
        const result15 = await DwarCharacterContract.rewardAddress();

        const result21 = await DwarMountContract.charityAddress();
        const result22 = await DwarMountContract.devAddress();
        const result23 = await DwarMountContract.lpAddress();
        const result24 = await DwarMountContract.founderAddress();
        const result25 = await DwarMountContract.rewardAddress();
        // const result1 = ethers.utils.formatUnits(result);
        console.log("tokenPrice", result1, result2, result3, result4, result5);
        console.log("tokenPrice", result11, result12, result13, result14, result15);
        console.log("tokenPrice", result21, result22, result23, result24, result25);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchPrice();
  }, [account]);

  return (
    <Box
      sx={{
        background: "url(/inventory/bg.png)",
        mt: "-146px",
        backgroundSize: "cover",
        pb: 10,
      }}
    >
      {/* <Container
        maxWidth="xl"
        sx={{
          pt: 20,
        }}
      >
        <TextField
          value={tokenAmount}
          onChange={(e) => setTokenAmount(e.target.value)}
        />
        <Button variant="contained" onClick={handleTokenWithdraw}>
          WithdrawTokens
        </Button>
      </Container> */}
      <Container
        maxWidth="xl"
        sx={{
          pt: 20,
        }}
      >
        <Button variant="contained" onClick={handleWithdraw}>
          Withdraw
        </Button>
        {/* <Button variant="contained" onClick={handleWithdraw}>
          WithdrawAllTokens
        </Button>
        <TextField value={amount} onChange={(e) => setAmount(e.target.value)} />
        <Button variant="contained" color="error" onClick={handleMintCharacter}>
          Mint Characters
        </Button>
        <Button variant="contained" color="warning" onClick={handleMintMount}>
          Mint Mounts
        </Button>
        <Button variant="contained" color="info" onClick={handleMintPet}>
          Mint Pets
        </Button> */}
      </Container>

      {/* <Container
        maxWidth="xl"
        sx={{
          pt: 20,
        }}
      >
        <TextField value={price} onChange={(e) => setPrice(e.target.value)} />

        <Button variant="contained" onClick={handleChangePrice}>
          Change Price
        </Button>
      </Container> */}

      {/* <Container
        maxWidth="xl"
        sx={{
          pt: 20,
        }}
      >
        <TextField value={price} onChange={(e) => setPrice(e.target.value)} />
        <Button
          variant="contained"
          color="error"
          onClick={handlePriceCharacter}
        >
          Set Characters Price
        </Button>
        <Button variant="contained" color="warning" onClick={handlePriceMount}>
          Set Mounts Price
        </Button>
        <Button variant="contained" color="info" onClick={handlePricePet}>
          Set Pets Price
        </Button>
      </Container> */}

      <Container
        maxWidth="xl"
        sx={{
          pt: 20,
        }}
      >
        <TextField value={text} onChange={(e) => setText(e.target.value)} />
        <Button variant="contained" color="error" onClick={handleAddress}>
          Set Address
        </Button>
      </Container>

      {/* <Container
        maxWidth="xl"
        sx={{
          pt: 20,
        }}
      >
        <TextField value={text} onChange={(e) => setText(e.target.value)} />
        <Button variant="contained" color="error" onClick={handleTokenAddress}>
          Set Token Address
        </Button>
      </Container> */}
    </Box>
  );
}
