import "../Styles/Home.css";
import Header from "../Components/Header";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [Bids, setBids] = useState([]);
  useEffect(() => {
    const getData = async () => {
      axios
        .get("http://localhost:4000/api/v1/get/all/books")
        .then((res) => setData(res.data.Books));
    };
    const getBids = async (req, res) => {
      await axios
        .get("http://localhost:4000/api/v1/get/bids")
        .then((res) => setBids(res.data.Bids))
        .catch((err) => console.log(err));
    };
    return () => {
      getData();
      getBids();
    };
  }, []);
  return (
    <div className="home-page">
      <Header />
      <div className="main flex ">
        <div className="book-sect flex col">
          <div className="hero flex col">
            <div className="flex">
              <h1>
                Find your <span>favourite</span> book here
                <h1>
                  And Start <span>Bidding</span> To Get it
                </h1>
              </h1>
              <h1></h1>
              <>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                  style={{ zIndex: 0 }}
                >
                  <SwiperSlide>
                    <img
                      src="https://th.bing.com/th?id=OIP.8TD_d_dRAQZ9nMWBjjB8pwHaLe&w=200&h=311&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAT0AxQMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAACAwABBAUG/9oACAEBAAAAAFy5JJJDNMkkkqSXd3JJJHnWaSSqlVGS7l3dyMuLlSqlUANhQo+qbm1nz7YMapsyWtl3HgzPtbzumhIaZj1JK1ihkNj0a8G+YOhmpW7Pm2JuwUBEda0Hl6w49OcV6qyalXFjVW6tedgln0tSgNKXUpgqsRJlHys/bXI4F2a2qshKhowrmdxuOSSSSSSHIMu4ppFVUxdmu4VFYBUGVbdCVDNAS1vtguBSQMaIb1rpUY/HL0aENSuAB1RIzalo07DEQLYBqx2Yg0IGKpNDGslzTeLkZE9vbQMCZNg4A0dm0som4OETOX2eiIsFaekHGLo9FyGq1KyeT7RcHr7bFkQexWZHafi11NS+erIGDo6hFlAeodNr1cXqhqNObHo56nnBOVZnp53YaPiu1j9Bq5z8vHydJxCUKFn3D0y4/HdpZ2VxXCR1oNXJtVy+ttZPNHrydXalQcfF19uOip/SDgF1dbR8vyp696I7ncnrEsSjnc53N7G1pcPHO21XObmwbtNC/SXFbua2A7zV32d+JIgJKIdIjnTp6TqAPGeowX1xz6DrKSxbWjmp07mqZy+R3svD9FuiATqXa3VpzL05CRq4vR34+F0Ojt5hkSmg8h0DxkaHFxPYzl8/J2tOjANRkbS9SM+ery6OwrOnmbOjopSnDRU1fM62TQnKjrrvNn6gUyZrfUoQ5unZubg1ItnO3NHMqSjIV2nPOjpI2YNuBO+1Am6qEoSSqdDrhWduPn9NpLzQAhVm0OzJPWjTqzc7U9iGAUWAHKaWrkdLRy+pd4jJiSQawYmpHaS5/aLkbUA8BjBQyINYwNTd+Dp3hllibHZSS1S2iFRr1MVWlTUZdLFqYB0BEAySSSSSSSSSSpJ//8QAGQEAAwEBAQAAAAAAAAAAAAAAAAIDAQQF/9oACgICEAMQAAAA8v3AMwDV2a2DdDd0SQpgobhiububhYdZPEVXaGVwAfUDKFiezJjEzcoAbhi1x9Be3jnTl6jAADRczWM3eiNE477mGjK66sKrTMbHfo5VusgjTs51J352GFq/QZuKvNNbY5aKN5vezYnRGyhaIu7izpji8HbrKtZ93HuBWeMKjL0zbhvr4vVz9kejmg+4riza9oz87uVzO/hvJqkGQJVh0POWcfeN0Qt5026rGPLVSkOrn1lldaUnfi1KXVqR4+3o50fNwUh0VlVHBtlaPH22hzXaLNJpV0sVJoo6yeuIq1pknTK006Mjy4gNRdxU6XM3NopDbKuRZzJsbqa9djdpnHj6qvu6KDbMplx9wTAA1xMYNU0B/wD/xAA7EAACAgEDAQUHAwMDAQkAAAABAgARAwQSMSEQE0FRcQUiMjNSYZEjcoEUIEIkYqFTMDRAQ2OxwdHh/9oACAEBAAE/AP7KlSpUqVKiozmlW5/T5PDax8gwJlSpUr/sqlSpUqVKlSuxwVUYx0Aosfu0dNLjANsxrpRmdbAYm2B2kypUqVKlSv7+vZ/E/ie75Ge59LfmfpfS/wCRLxfS/wCRP0fof8ibw7H9NitCwD16Q5Q6d1jxVG2KoxtuY3bEHxMvD9D/AJEvD9L/AJE/S+l/yJ+l9L/kT9P6W/In6f0t+Z+n9LfmfpfS/wCRP0j9Q+/MZSpIP9wW4o3ECDBf+RmTBsQtZmBA2TqLAE1KABWAAiKHYKW23F0jKbGWj9hHw5yKGcmEFSQRRERd7BQeZkwnGASwPWIhe6NVHxlKsiLjRgp28iY1DMQYceJef+TDhRh7sZSLBmT4h+1f7BDzEFgTF8wfzNRYK0Tx2aRejt5mplAyYGI8ri/Ev7hNQSMTEEg2JpXY7wzE8TU/N/gTD81JqOqD9wiqMadfUx2LsTMfwJ6TF8w+hmf/AB/mYPgPrHUNlIurmRKAJPXoK9B/Yo5ndgxFAoTD84D1jjDY7wrf3j7d7bfhvpMf6enB/wBpM0pvCAfAkStrgeTTUfKeaXl/QTU/MH7RMXzU9YZnY0B4dmL4FmP5rfzM/CzD8J9ZkUlzVRmLcyuyhUxCy0yj3h6TAP00mH5/5mq+NP2wDcQvmajumJbbjiJnx5DS3NQtZgfOjM/ynml+J/QTU/MH7Zj+YnrMrFVseYhC5E+xhBUkGYvlrF+c38zNwvrMPDesy/H/ABG6tK7P8V/mYBZaZ+jj0mn+Ukw/95Pq0yqM2QBMmMlRRG6Y8LJnQNXBaatvgX1MwGsqTUr0RvJplBZGUczDjZCxbxmdg2Tp4Conxp6zN8s+omJ9po8GZU3CxyJiI2DrB84+pmRSwFecRdoMc7m/sPwJ6tMDohbcZmdXe14qDWYNPjUZLje0yuQvhx/y8TLnzanv+gf7Coc+Utu3UaqM7ObY2YCRwSIWY8kmHUv5LGzZG8a9OxTtINCNlZhRA7BmcCqBhO4k0IrFTYAnev8AaFmbkwCh/Yfl4/Vuw3RrmukwYhn1W3O7XE0emTjCsK41VrAVQLJ8hKYAblKki6PPX+yuypX91QCv7OjesDAAq4sSsP1ZPwJWH6sn4Ey4MWatjOMi9UNCYVxZwMjB0cWH2GnDTGmRkAz5N53BgI2NFUA2BZ46wLjPDN+BCMYPLfgT9P8A3QqtX1nuf7oAp43Rgoq7n6fm0VUJ6bpSHzgUcUesK+FQIfKbWPgIQfKEV2Fbl+DQiu1HpuB15nPFTKDSi+BcuO1Jd1wLinct1UXrjYehm0gWRFJFdY7qxNEHsVSE9YiAk2OBHG31PMA8IFqMwPEMbtq7lFfSUlHaLg4uIFLe8aEAXoQb+8fu1os9MSdpPHpO7QjdvFfbrDjwlgd7WOBAF85j+Lm7BmTLvQKFhDdAByRf2EtjZYUSbq7gFkCbiWpYBsU3zU96z6xVCiZcngIh90+suN2CDkxvhMK7TfiVj5FAs8+XnGyu1i5hzg+6X2N4E9QfWZt+wjMbyjL/AMEdKlOoPQiYs6jpkW/uIDiPW+Yq4wymyIw2noYQYREHJmHFtG9o7Es5PlMa1uJ85lfqAJkJsekxn3T69jdgnifURgQDHyDGo8/ATqx8zGVlcqwojsLtux9b28T3HoAc0D6Q6PMBuQb1mmwkhi1ha6Rh1oeBldbPA6AStp+KUCL/AP2YUBoV6zPm6BVj5k0+M5ch9B5zP7Q1WVmZcjBPJfdhz5Rv95/e5uDK6m1Y3NBkfJhYt4N2N2CHk/uEz5FRfueBERsrElqA5YzTY13cdBNfiI7rJ9XYnUlv4ExC8ii5hYoZmdupodYiBrF0FHWLi3JfHqJ3WTovMGnPSyPxHOxKX+Y3izkhBzNTlbUO78L8KKJpsS7LNFq/kTLp8uRN64WIUDe9SrFV1E9m/If9/Y3aBZb1EzYw63wwmBcpy7FHXxvwiL3SuCwM1LjJpqPgQRH4A8zLVaszT47YN0sA8G4ikkADwhVRTMLqIoJyiqEChEVQ5chep84lIGcMzHd0HgsUll3EdezV4e/wuikBqsQ7gEVgQbO0+sRwmmTDQpWJ3Hq0GpbT4sqoi3k5JhFDjmezfkP++Le5zRHWHtUfGbEdz1UCJlpgIpDYxa35x8QfGVWL7PLKbydYPZmZ3ougXzBiqmLIAgAqqWZcyYsTZXNKomm9pabWscK2j+Fwoy2TVE0aMAK+FzuwxHNmvwIB0oR6IswOx9/YV69L8RM6ad1Uv0v/AJImXC4PS+eRG4PSPo8l+6RR6zR4hhxMt3b9h57Ry0ZFAY0LMVVFUBB0U0OUuU2618a/Exqeph+ai8GrgTe7N9zNishRhakUQZr/AGYmLEM+kTY+KYM6avSLlUfGKryaWwBIbjkEcTGFqwbvxhmQFsbrwSDFxJmcO+Me6aW/Ca3F5dUAgC7S24ATM+J8mIh1CbLa+ekfNkyuzj3egCr5LMLBlahVNULAecPaOWjGvIxByzcnmUmbE2NlseVkR9Q6rSKtqOswZ1yYi7Utcz+oyPq0zKp2WEqY1EqZsi4cOTKwJCLc750cvivGoyF0ANhDP619WcIwFDkcBXFGkE/qdWdbnGDKU35Wmk1I1CeTr8QhjanezJihTfiKvzUy4nTCEPn/AMTNWNozMTdzRfINg/F0m1rssKu+PwIexuDBxAMRtXFE8NHVsY97qvSmEUAMDHYJqCU5U1O6VkDoPdYTT4imoXyowdntjMQmPApov1MyaHMuJMmJ1el+Hxmgy5cGpClHOJ/sZ7OwZcDZs2XHRbok1mF8OE63AzDKjU8xZO9xY3qtyAkTuUxlii1ZsxTzMjh1bGTTcCagFiRXWDAB1dukxZe/x39Pu9h7G4MEPj6TS4yELP8ACwpVhwlWpeR1Ige8uQnxYzTZRiVQ3+URV3lhPGUZ7X3rqhk4GwBZ7Kcd7rC7qKwlRH9qaTGvzd5rhY/tZU/8klvWYcY1WmRnPuZlVmSHaq8gACM4PETcSa/Mzo6Iz413kDosZmyo2XIVR9wGyjZmWyws3PZoQYmDsBeToJmxqoBUw9hi+MwhC4DLflfFwEVcdQ9WablTNRpX01OcoYO8zuVbCv8A6QP5mhy97jYnm6gdQ7qbAWhZ4s+HYwVhTAEeRntbTFdSWTFSbRNjKy0ATSzOGGVr5ns9v9Fpv2TKne4nXz/9xFOVfdcD1EDlT048oM2IkgHgWftNYC2egjNSggKI7EMQQBR8Jj7lcabDvFcnkXGckAQ9qg2Z3ZozLkCr+pRsfB/8tFzkZlI8DPad5Dg2dVALfy01h/1TDyCiezwf6ZD5kmBGZgGCsm4uPWBwQCDLmsR31GVsOcXwVj5HUBc+kVgBU73Rl0UaUL0WaHMmTTptFAeExHJsLZECsWJoG5mdEvxPlP1dQ3kFmXH06c3dzPkYJt3HyNeIECMyjapPUD+ZpBWNxVe+ew9gQmYEUMbMz5UxkgfFHc5W8TZiKq3Rs+JmBgcbKeUNj0MZFYtuA5iqAKAAAgX+nX3eo8ifGYg1UfCA8maxcf8AU5RwxaJ/VpZTewVbmPUZct7sCP4eU0bFkN6cI19QIQKmZEZridb8gJk4MbFvqwDRsDgXDpbuz91611PJNRU7u2Z7LG28etRsgvp0A5vxhHYXJiuVYkTWKzY0yjleh9DErqQOp5jsBuCk0zTTZNjIW/a8W1YqfqMvYrMKIEyHeoFUTP8AACq8DMuQYcTMf8FJjsxYs3JNmaJWw4EVmO4iz6mazPmwZbxnoes0ftLK2UIzE2ImoJammYNMVgv6QAEde1sBLsdwAMGFBz1MZW5MuDrPqgrbtPBFESjidsbeEf3OL/8AoTT6dnZjxdXDlx4OjnoIj4s+J/psczT6ou2VX6sPGA9S26wOgntLOUwEeLGaXE2XMm/4eb9JkLBus1CHLiYePK+sXIyOH8QbispUMCesw5A42n+IQQxUiZ8T5WG08LRHqYm9KDBx+oCfSodRlQWSTXIMOR/dG33vG+goc1P6lfFDGbdtZSaPYOJ5yvdszVYi4TKvKmj6TFgOZgxsAcmabMGRgq1RmXKmR3Bx37xH4mBkfDkxoCsxE42dls1fT7GDVYWCqCRXgZ7RffnCeCiezMAVGyc2elzIqt12168GEnjgXdTVJ3eZvI9f4M0DHIndDqwmNwh85v3gGMrbnLLQbJ4ggckwNbMFyt8aiwYMuUsqMwNnr7t0JvVxjLoPll/SK2CnADAkFfMwsCqlT0rp2LxOguDOmQlb6wNXEyM6o5At9pqLqMulRSyA2feAjaoM7OqsARdEeMB6qyuQwgyNYJHqOSY6KPfxgEck3CmR3LsBbm/WaPGEwon0rU1CqBHrwE1uLcgbxBqaZjhzKSRXBhmFgbs9ZcXUswsBT7zV+QBA2IEAoq9WrYSPHbLxkfHlFrs60fdjYCCWVhc60ou6HPZuoT4twMXDtIYkGpu2+sy5+6W7948TBjCI2RgLPUwXn7zK1muiLE5WuRVwiiG3ER9UwYhFIETUghTsXdXWxzBq2YChUfMWhmdbw5BQ4jMVG1R6muZp9SzkIwPrEyFaA6C+sVw42tVkceYhxY9wbb1BuNgSgATxUOA2pLA0RCf7FPUy9os8wtcz5N+Xn3Qag1GBUBZgOl1NOd60gh0jMpNe94Q4Sht1N+ZmbAFUstxMblWyBbVCLmLG7qHA6MARK6mKjNdCZ8eV3GJR1C7iLh02YZExlaZoulRFFIA1Qo68iAsnUeMGU+PUecOQDkTLmNirAmNmZdxNkSwR2XUB2+8efAQsSbMd9qMZUzKWbdVKABNAKczNmOIqAoNiYsi50PT1EzIEd0PE0+mXHpu6b/K938zROUL6d/iQzOlPfgYlYsZZvAWZpHOTVO55KmMB3+M+O2MxEVw9iusyAKa7LsVGFDaR6wEjqJfiP5Eu5de8f4Esk2YJnIqhfMB84Wvwns4ncRU1nRk/bNCDeRvQR1GTV14KATMmQjPjQA1Rua1Tiy4tQnoYduVFYcGiJr8tKMQ8epmgQ94X8NpEb52P0mU1tifGT9pmNsPTsBo3OewGjKB6gxsi31MGQHgEy3+kD1McAHqbPkO32fff/bYY+BMpBcHpHz4cC7VokcKJplIxtkflzuMbWgAnuj+YwXVaf962JoctK+N+my2mXIcuRnPiZpgFCjyWP85PSMoarjMiCv8AgSyTZjdjkgeMRrHW77SpEwi1PrNl8NMmF06nqPPsRDkdEHLGPg7hyt2D1Bj92eTNJpzmVm72gGqqh0S/9Q/iZdJnAO1lYQijVTBpe+QtvrrUOgH/AFTGwMOKPYmIMoNxhsYiBLANzZ94wo1GHSuPIxmUncejeVQG+ygZiACn1hZhkRQBRjqDiyXxtMAJmgwm2yn0E1uEZMQbxSDGs0VDE/75nztiZaUGxMWYZQelEcia7EKGUehmh+Sf3mZ9Q+J1VUBsTHlGRbqj4iZ14YehmL5YmX4zF4HpC5BI6QknqZyIw5E4FDsJmE2D6xStgEgGZseR8ZCN6jzgF0AOpihcGL7KsxOMuJW8x1EyoceRk8jNH8t/3TXMQ+PpfuzR7u8Yn6Zq/kN6iaL5R/eZqvmL+2afl/QTP8v+RMXyxMnxmL8I9ISPMRuT2Hk/2af4T6zJp2yspBAAEXp1PAmkTflL+CwqrCmAI8jFVEFKAB5Ca1LC5B6GaP5b/umfC2VlIYChMeJcQocnkzV5QxGMeHM0fyj+8zPgbK6sGAoVEQIKEzuGIUcCY/liZPjMX4R6RkJJMIqCFCSYRR7ceQYwRtuDVAcYz+Zk1D5BXC+QmHVDCgUY78zcz5jnYGqAFATDlOFwwF+BEfWB1ZTi5HnMGo7pSNt2bh1g8MZ/MyajI4oe76Sphz90pXZfW+YdZ5Yz+Y2fI/ko+3YuTaoFRm3G4MlACp3n2hNwP9p3n+2M243X/i//xAApEQACAgEEAgEDBAMAAAAAAAAAAQIRIQMQEjFBUSITMkIEIGFxIzBS/9oACAECAQE/ACyyyxbWWX+3NXRnGCn6R4sVsljbJkp7opuKQ/xJC6oWEx/aLofo9H5HvZeT8T0NOy80ex9C6O0f8lfIb729l+COlCKXLLNe2k0sLayyy6LHJnh7Jl/wjS1UlTNR/CQs4oS7TRWconh9ChfFV2OCWKPppIluiMWx5jTKV4SQoZw4k+UpW/B90iMXGPJ9swlbJTu/6LvZEdO3/Aopwk14I+WRrkkzUj8lGP3MelqrxaNKDj8poherPk+kXG6o10vpt0LZEFOso+UYpR+2hcWqbqhQg6a7ocMp11tJUiM6vApu7s1tSD02ky7e6X+O3PN4RpL6kUl2PRlcsdEItbJUM4KXR9B9o1tBw07bRjFbeGadaqUXHryj9NBxck2OTSknvl+B9CllUSk1HlHFGpHnppymrfROD05U9llUfp3xg+SqvJDUu2l0PUuC2irY4jK4NcVSJakZKMU8s1Yrh/Q25PO2m4QknVmvPppeDTuE+TeJYEsod2/RpybsWrGUmic4RlXsnP5VRm7Lb7ZJLGNkNXFohG0uQpZeUOT4kbjpfyyVwld+TXXOEZoU1LTy/kisD/omlXWyaQvZySWVY5JNNKmiLeo6fROcI8cmtNSeDQalpuLJRenJpsVeS17JzxW0Tn4R9NzqrwSXGbLcXdks59FF8KRLOWXRCSjLk1aROpSbqtlF+iKyfUlVWSVs8UJiVMk7ezIpzajZKLhJxe12dFnTu2OmRZbsaGsFIjh2jV1I6iTqpbLZD2XYzwPrZf6b/f8A/8QALBEAAgICAgECBQQCAwAAAAAAAQIAEQMhEjEQIkEEE1FhcSMyM0NigUJykf/aAAgBAwEBPwC5cuXLjPVARcpJH0P2qXLly/LHqaur3LU3s6nNCa5GFgHC7/8AY5ReybmPi3R+89IIHI3LW6s3Aw33qfMX/KA0RvRHg+05AZCYp1kmJgRVRiSzP9GEy7fFAAM5r6TIayKZjHbHswf2T+oRbPCjoCXGFld+8/uMH934MTIox97AMXEDjLe8uxi+0G8xImT96wHg1Howd5PwZY+VV7i6C/iXD/x/M4gMW3cLMxbjoGYUQEg7JlCqqFVPYgAHQlAm4QD2JQqpSj2E9x5r/Ix8VmxEADCpRG7Mb2NmfgxdjswtVmzOWrucyTF8mBGcGtSnGVUawSe4+JwCQxb8Qto2GiFaoHudLCQxodCbY0JwpBAPH1iC15NoCfP/AFlxganxBBONK9TOK/AmV2xH0GHIzWxnJYXv0gxyMacV7M4txu5gY8wLNQeDD8XiAKBtxCpeyfUGmXOUzs6LytAB9o2XITbRW73KA7MBjJdG5wWqqYsTq4YjUA8kKDpB+ajN8vIZZYxmvwTfhMvcHBsfNsnEAiJ8TjyMURSAOot+XvF6gf8AUyBMgDAbm1PfgESlB7nvAKXcwnGbx79Yi/pZGUY6CnZiMGFjz8RXK7mMnkBGQV4dgo3FcH38Jj5KSevrFDYS2StKJj+Iy58nF/2xQB14YMwIupTB2DQGiDGNCDrfZmRRqHAQoahcRHZL+kVTw/dCQRRAiqgN6EDC9HznXQYexiIXBIGhGTXRECi6Eamy/iLWRKr2mE8MjI0deLaGjPaH8QaI14IMYLdLAjUfVVwoaNsTGAxCwImJ2s8TMKFRufEKRkDqJfzcdgTq7EsfWJZNnyMcZA1COzhuC1EeyVIoiHKSGqtGHJ6QR2Zza611cV3AurE4q4uoMaqRqzCteAKhlmOwTMCfpCxJfJVXoQKUK2tREPOvYRv3n/qYD6eIGzEHFQIxCgtUUh1BHRnGZSVWxBkcFb2DMjcEJmJuafcRnynKVUxHblxeFn5kAxHPLi3cRicjC9QNkZiAZlLBFBPfcw42S92p8Zx+nDS8WBsz4h7YL7DuYHAyEezSwuckz+TLYgIXMSYPXmsTH/M/+4ApZrapmrilRHUgAHdeGUMKMGLGDYWDEgblW42JGNkbhw4ySSIqqvQhxISSRAqroCBFDFgNz5OP6Q40IAI0IuNFNgeP/9k="
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://th.bing.com/th?id=OIP._I3mUgPn2UWllDgKSswFrgHaKw&w=207&h=301&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://th.bing.com/th?id=OIP.Uo3jYD4LXSfyXc4RqVpmvQHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://th.bing.com/th?id=OIP.E4PmFhr75cB9b1ZbhsF5pwHaLM&w=203&h=307&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
              </>
            </div>
          </div>
        </div>
      </div>
      <div className="main-books flex">
        {data.map((item) => {
          return (
            <div
              className="main-book flex col"
              key={item.id}
              onClick={() => navigate(`/book/${item._id}`)}
            >
              <img src={item.coverImage} alt="" />
              <div className="price flex">
                <p>$ {item.originalPrice}</p>
              </div>
              <p className="bid-status">
                Bid Status{" "}
                {Bids.map((bid) => {
                  if (bid.bidId === item._id) {
                    if (bid.bidStatus == true) {
                      return <span style={{ color: "green" }}>OPEN</span>;
                    } else {
                      return <span style={{ color: "red" }}>CLOSED</span>;
                    }
                  }
                })}
              </p>
              <button>Start Bid</button>
            </div>
          );
        })}
      </div>
      <div className="footer flex col" style={{ gap: "10px" }}>
        <h3>BOOK-AUCT</h3>
        <h2>
          Where words become treasures, and pages find new homes. Happy bidding
          in the world of literary adventures!
        </h2>
        <div className="links flex">
          <a href="">
            <i className="uil uil-facebook"></i>
          </a>
          <a href="">
            <i className="uil uil-twitter"></i>
          </a>
          <a href="">
            <i className="uil uil-github"></i>
          </a>
          <a href="">
            <i className="uil uil-youtube"></i>
          </a>
          <a href="">
            <i className="uil uil-instagram"></i>
          </a>
          <a href="">
            <i className="uil uil-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
