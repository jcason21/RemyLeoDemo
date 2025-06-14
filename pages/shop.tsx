import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "../components/ui/dialog";

const products = [
  {
    id: 1,
    name: "The Guardian Vest",
    image: "/dripcut.jpg",
    price: "$180",
    description:
      "Dripcut silhouette vest infused with adaptive protective threading. Includes wearable lore card.",
    gallery: ["/dripcut.jpg", "/dripcut_alt1.jpg", "/dripcut_alt2.jpg"],
  },
  {
    id: 2,
    name: "Signal Hoodie",
    image: "/hoodie.jpg",
    price: "$150",
    description:
      "Sound-reactive glitch hoodie designed with embroidered circuitry and thermoregulation panels.",
    gallery: ["/hoodie.jpg", "/hoodie_alt1.jpg"],
  },
  {
    id: 3,
    name: "Phase Shift Tee",
    image: "/shirt.jpg",
    price: "$90",
    description:
      "Quantum weave tee encoded with soft threads of memory material. Ultra-light and breathable.",
    gallery: ["/shirt.jpg", "/shirt_alt1.jpg"],
  },
];

const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0E0E0E] text-white px-6 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
            REMY LEO SHOP
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Preorder futurewear drops. Adaptive fashion with encoded purpose.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {products.map((product) => (
            <Dialog key={product.id} onOpenChange={(open) => !open && setSelectedProduct(null)}>
              <DialogTrigger asChild>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="bg-[#1A1A1A] p-6 rounded-2xl shadow-xl w-full text-left hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative w-full aspect-[4/5] mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-[#D4AF37]">{product.name}</h2>
                  <p className="text-white font-semibold">{product.price}</p>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      className="w-full border-[#D4AF37] text-[#D4AF37] hover:bg-[#2f2f2f]"
                    >
                      Preorder
                    </Button>
                  </div>
                </button>
              </DialogTrigger>

              <DialogContent className="space-y-6">
                {selectedProduct && (
                  <>
                    <h2 className="text-2xl font-bold text-[#D4AF37]">
                      {selectedProduct.name}
                    </h2>
                    <div className="flex gap-3 overflow-x-auto">
                      {selectedProduct.gallery.map((src, idx) => (
                        <div
                          key={idx}
                          className="relative w-40 h-52 rounded-lg overflow-hidden"
                        >
                          <Image
                            src={src}
                            alt={`${selectedProduct.name} view ${idx}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm">
                      {selectedProduct.description}
                    </p>
                    <p className="font-bold text-white">
                      Price: {selectedProduct.price}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {sizes.map((size) => (
                        <Button
                          key={size}
                          variant="outline"
                          className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#2f2f2f]"
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                    <Button className="w-full bg-[#D4AF37] text-black hover:bg-[#c39e30] mt-4">
                      Preorder Now
                    </Button>
                  </>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </section>
      </main>
    </>
  );
}
